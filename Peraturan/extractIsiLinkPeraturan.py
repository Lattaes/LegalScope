from flask import Flask, jsonify
import json
import requests
from bs4 import BeautifulSoup
import re
import os

app = Flask(__name__)

def clean_text(text):
    # Replace newline (\n), carriage return (\r), and multiple spaces with a single space
    return re.sub(r'[\n\r]+', ' ', text).strip()

def extract_website_info(url):
    try:
        # Send request to website
        response = requests.get(url)
        response.raise_for_status()  # Raise error for bad response
        
        # Parse HTML content
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Extract Judul
        judul = soup.find('h1').text.strip() if soup.find('h1') else '-'
        judul = clean_text(judul)
        
        def get_table_data(header_name):
            header = soup.find('th', string=header_name)
            if header:
                td = header.find_next_sibling('td')
                if td:
                    link = td.find('a')
                    if link:
                        # Extract the href attribute of the <a> tag
                        return 'https://peraturan.go.id' + link.get('href')
                    else:
                        # Return the text content of the table cell
                        return clean_text(td.text.strip())
            return '-'
        
        # Extracting specific data from the table
        jenis_bentuk_peraturan = get_table_data('Jenis/Bentuk Peraturan')
        pemrakarsa = get_table_data('Pemrakarsa')
        nomor = get_table_data('Nomor')
        tahun = get_table_data('Tahun')
        tentang = get_table_data('Tentang')
        tempat_penetapan = get_table_data('Tempat Penetapan')
        tanggal_penetapan = get_table_data('Ditetapkan Tanggal')
        pejabat_menetapkan = get_table_data('Pejabat yang Menetapkan')
        status = get_table_data('Status')
        dokumen = get_table_data('Dokumen Peraturan')  # Update header name here
        tahun_pengundangan = get_table_data('Tahun Pengundangan')
        no_pengundangan = get_table_data('Nomor Pengundangan')
        no_tambahan = get_table_data('Nomor Tambahan')
        tanggal_pengundangan = get_table_data('Tanggal Pengundangan')
        pejabat_pengundangan = get_table_data('Pejabat Pengundangan')
        
        # Extract mengubah and dasar hukum information list
        mengubah = []
        dasar_hukum = []
        
        div_card_body = soup.find_all('div', class_='card-body')
        
        # Print the index of each div.card-body
        for index, section in enumerate(div_card_body):
            if 'Mengubah :' in section.text:
                for item in section.find_all('li'):
                    link = item.find('a')
                    if link:
                        mengubah.append({
                            'text': clean_text(link.text.strip()),
                            'link': link.get('href')
                        })
                    else:
                        mengubah.append({'text': clean_text(item.text.strip()), 'link': None})
        
        # Extract the second 'ul' element within the second 'div.card-body'
        if len(div_card_body) > 1:
            sec_div_card_body = div_card_body[2]
            ul_tags = sec_div_card_body.find_all('ul')
            if ul_tags:
                sec_ul_tag = ul_tags[0]  # Second ul in the second div
                li_tags = sec_ul_tag.find_all('li')
                for item in li_tags:
                    link = item.find('a')
                    if link:
                        dasar_hukum.append({
                            'text': clean_text(item.text.strip()),
                            'link': link.get('href')
                        })
                    else:
                        dasar_hukum.append({'text': clean_text(item.text.strip()), 'link': None})
        
        data = {
            'judul': judul,
            'jenis_bentuk_peraturan': jenis_bentuk_peraturan,
            'pemrakarsa': pemrakarsa,
            'nomor': nomor,
            'tahun': tahun,
            'tentang': tentang,
            'tempat_penetapan': tempat_penetapan,
            'tanggal_penetapan': tanggal_penetapan,
            'pejabat_menetapkan': pejabat_menetapkan,
            'status': status,
            'dokumen': dokumen,
            'tahun_pengundangan': tahun_pengundangan,
            'no_pengundangan': no_pengundangan,
            'no_tambahan': no_tambahan,
            'tanggal_pengundangan': tanggal_pengundangan,
            'pejabat_pengundangan': pejabat_pengundangan,
            'mengubah': mengubah,
            'dasar_hukum': dasar_hukum
        }
        
        return data
        
    except requests.RequestException as e:
        print(f"Error fetching the URL: {e}")
        return None

@app.route('/extract_and_save', methods=['POST'])
def extract_and_save():
    # Load JSON file containing URLs
    file_path = "Link Peraturan Indonesia.json"
    output_path = "C:/Users/khalf/Code/LegalScope/Peraturan/ExtractedLinkPeraturanIndonesia.json"
    
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            url_data = json.load(file)
    except Exception as e:
        return jsonify({"message": f"Error reading JSON file: {e}"}), 500

    # List to hold all extracted data
    extracted_data_list = []

    # Iterate through categories and their URLs
    for category in url_data:
        urls = category.get('wrapper_URL', [])
        for url in urls:
            extracted_data = extract_website_info(url)
            if extracted_data:
                extracted_data_list.append(extracted_data)
            else:
                print(f"Failed to extract data from {url}")

    # Save the extracted data to a JSON file
    try:
        with open(output_path, 'w', encoding='utf-8') as outfile:
            json.dump(extracted_data_list, outfile, ensure_ascii=False, indent=4)
    except Exception as e:
        return jsonify({"message": f"Error writing to JSON file: {e}"}), 500

    return jsonify({"message": "Data extraction and saving completed"}), 200

if __name__ == '__main__':
    app.run(port=5000)
