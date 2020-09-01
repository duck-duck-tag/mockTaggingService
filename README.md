
# mockTaggingService

## Purpose & overview

Mock several image tagging services to aid in developing [duck-duck-tag](https://github.com/duck-duck-tag/novelty-boilerplate). 

The service listens for HTTP-requests to /tag/**nameofservice**
Name of service should be one of the following:
* aws
* azure
* ibm
* google

The service returns a random amount of tags (with random confidences). The structure of the JSON returned mimics the structure of aws/azure/ibm/google (depending on what was requested).

## How to

Run duck-duck-tag in development mode (`npm run dev`). This starts a webpack-devserver. The devserver redirects requests to /tag to http://localhost:3001/

mockService runs in port 3001 by default.

When running the app, configure the **URL** or **ENDPOINT** for each service as /tag/**nameofservice**/. Example: /tag/azure/ 


You can do this inside the application or by altering the [defaults](https://github.com/duck-duck-tag/novelty-boilerplate/blob/master/app/constants/services.json) used by duck-duck-tag.

## Usage 

```bash
git clone https://github.com/duck-duck-tag/mockTaggingService
cd mockTaggingService
npm install
npm run dev
```

