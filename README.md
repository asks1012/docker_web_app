# Docker Web App
### Steps for using :
1. Install httpd software in linux and start the service
2. Copy the index.html, style.css, script.js files and resources folder to : /var/www/html
3. Copy the index.py file to /var/www/cgi-bin/ and make it executable with "chmod +x index.py"
4. Go to /etc/sudoers file and add the line "apache ALL=(ALL) NOPASSSWD: ALL"
5. Go to the browser and hit "http://IP_of_Linux/index.html" and you can view the website
6. Under the website, provide the IP of the Linux and you can start executing the commands
