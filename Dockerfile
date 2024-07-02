FROM cypress/included:13.11.0

RUN mkdir /workspace

WORKDIR /workspace

RUN chmod -R 777 ./
RUN chmod -R 777 /workspace

COPY package.json ./

RUN npm install

COPY . .

docker run -it -v $(pwd):/workspace:cached -w /workspace sha256:753edb9737773afbb6579e11072e7876d0f0b46974517696a305cbce4c467a2b \
    npx cypress run --env run_env=api --spec 'cypress/e2e/ws.js'
