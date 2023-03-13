FROM nikolaik/python-nodejs
#/app è la cartella che conterrà tutti i file all'interno del container
WORKDIR /app 
RUN npm install -g nodemon
#Copia requirements.txt e installa le dipendenze
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

#Copia tutta la cartella server
COPY . .
RUN 

#Espone la porta 5000
EXPOSE 5000

#Avvia il server python
#CMD [ "python", "./app.py" ]

CMD ["nodemon", "./app.py"]