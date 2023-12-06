# Azure Computer Vision API Documentation

The Azure AI Vision Image Analysis service can extract a wide variety of visual features from your images. This service is part of the Azure Cognitive Services family of APIs.

This documentation provides information on a set of RESTful APIs for interacting with Azure Computer Vision services. These APIs allow you to analyze images, extract information, and perform various computer vision tasks.

## Prerequisites

Before using/consuming the APIs, ensure you have the following:

- `Postman` installed on your machine so that you can consume the necessary endpoint(s).

## Usage

### Accessing the APIs:

All the APIs will be accessible at `157.245.9.150:3000`.

### Endpoints

1. Image Statistics
   - **Endpoint**: `/api/v1/image-statistics`
   - **Method**: `POST`
   - **Request Body**: You should send the image URL in the request body as `raw` and select the type as `JSON`. Below is a sample request body:
     ```json
     {
       "imageUrl": "https://www.logodesignlove.com/wp-content/uploads/2012/08/microsoft-logo-02.jpeg"
     }
     ```
   - **Description**: This endpoint will return the image statistics for the given image URL.
   - **Ideal Response Status Code**:  $\color{green}{200}$ $\color{green}{OK}$
   - Here is the sample response for the above request:
     ```json
     {
       "color": {
         "dominantColorForeground": "Black",
         "dominantColorBackground": "Black",
         "dominantColors": ["Black"],
         "accentColor": "CB9500",
         "isBWImg": false,
         "isBwImg": false
       },
       "requestId": "9222092b-f4a7-464f-83ec-00cc7f8bb928",
       "metadata": {
         "width": 1200,
         "height": 675,
         "format": "Jpeg"
       },
       "modelVersion": "2021-05-01"
     }
     ```
    - **Demo**:
      ![Image Statistics Demo](https://github.com/prudhvi801157436/ITIS-6177-Assignment-Final/blob/main/media/1.gif)

2. Image Description
   - **Endpoint**: `/api/v1/image-description`
   - **Method**: `POST`
   - **Request Body**: You should send the image URL in the request body as `raw` and select the type as `JSON`. Below is a sample request body:
     ```json
     {
       "imageUrl": "https://t3.ftcdn.net/jpg/04/59/38/98/240_F_459389892_KBbBV3MkJA9UH6NOeOuLeb2QNBLq6kfx.jpg"
     }
     ```
   - **Description**: This endpoint will return the image description for the given image URL.
   - **Ideal Response Status Code**:  $\color{green}{200}$ $\color{green}{OK}$
   - Here is the sample response for the above request:
     ```json
     {
       "tags": ["ground", "floor", "orange"],
       "captions": [
         {
           "text": "a yellow toy on a wooden surface",
           "confidence": 0.4494529366493225
         }
       ],
       "requestId": "de5e68d3-36bd-4db1-9777-12a84a57d25a",
       "metadata": {
         "width": 360,
         "height": 240,
         "format": "Jpeg"
       },
       "modelVersion": "2021-05-01"
     }
     ```
     - **Demo**:
      ![Image Statistics Demo](https://github.com/prudhvi801157436/ITIS-6177-Assignment-Final/blob/main/media/2.gif)

3. Object Recognition
   - **Endpoint**: `/api/v1/recognize-objects`
   - **Method**: `POST`
   - **Request Body**: You should send the image URL in the request body as `raw` and select the type as `JSON`. Below is a sample request body:
     ```json
     {
       "imageUrl": "https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/04/external_mobile-security-versus-desktop-and-laptop-security-is-there-even-a-difference-anymore.jpg.webp"
     }
     ```
   - **Description**: This endpoint will return the array of objects recognized in the given image URL.
   - **Ideal Response Status Code**: $\color{green}{200}$ $\color{green}{OK}$
   - Here is the sample response for the above request:
     ```json
     {
       "objects": [
         {
           "rectangle": {
             "x": 588,
             "y": 3,
             "w": 352,
             "h": 204
           },
           "object": "Remote control",
           "confidence": 0.592
         },
         {
           "rectangle": {
             "x": 976,
             "y": 94,
             "w": 163,
             "h": 200
           },
           "object": "Coffee cup",
           "confidence": 0.544,
           "parent": {
             "object": "Tableware",
             "confidence": 0.605
           }
         },
         {
           "rectangle": {
             "x": 617,
             "y": 235,
             "w": 313,
             "h": 395
           },
           "object": "computer",
           "confidence": 0.649
         },
         {
           "rectangle": {
             "x": 940,
             "y": 368,
             "w": 167,
             "h": 215
           },
           "object": "cell phone",
           "confidence": 0.653,
           "parent": {
             "object": "telephone",
             "confidence": 0.654
           }
         },
         {
           "rectangle": {
             "x": 197,
             "y": 236,
             "w": 419,
             "h": 343
           },
           "object": "computer keyboard",
           "confidence": 0.509
         }
       ],
       "requestId": "b64c7c16-1012-42ca-ae96-c3fc1f51d796",
       "metadata": {
         "width": 1200,
         "height": 630,
         "format": "webp"
       },
       "modelVersion": "2021-04-01"
     }
     ```
     - **Demo**:
      ![Image Statistics Demo](https://github.com/prudhvi801157436/ITIS-6177-Assignment-Final/blob/main/media/3.gif)

4. Brand Recognization
   - **Endpoint**: `/api/v1/recognize-brand`
   - **Method**: `POST`
   - **Request Body**: You should send the image URL in the request body as `raw` and select the type as `JSON`. Below is a sample request body:
     ```json
     {
       "imageUrl": "https://www.logodesignlove.com/wp-content/uploads/2012/08/microsoft-logo-02.jpeg"
     }
     ```
   - **Description**: This endpoint will return the brand name that is identified in the given image URL.
   - **Ideal Response Status Code**: $\color{green}{200}$ $\color{green}{OK}$
   - Here is the sample response for the above request:
     ```json
     {
       "language": "en",
       "textAngle": 0.04014257279587017,
       "orientation": "NotDetected",
       "regions": [
         {
           "boundingBox": "478,298,391,86",
           "lines": [
             {
               "boundingBox": "478,298,391,86",
               "words": [
                 {
                   "boundingBox": "478,298,391,86",
                   "text": "Microsoft"
                 }
               ]
             }
           ]
         }
       ],
       "modelVersion": "2021-04-01"
     }
     ```
     - **Demo**:
      ![Image Statistics Demo](https://github.com/prudhvi801157436/ITIS-6177-Assignment-Final/blob/main/media/4.gif)

### Error Handling:
Proper error handling is implemented to enhance the robustness of the API. The API provides meaningful error responses for different scenarios. Here are some of the scenarios:

1. If the request is missing the `imageUrl` parameter, a $\color{orange}{400}$ $\color{orange}{Bad}$ $\color{orange}{Response}$ response will be returned.


    Example Response:
    ```json
    {
        "error": "image URL is required in your request body"
    }
    ```
2. If there are any issues either with the request or the response from the Azure Computer Vision API, a $\color{red}{500}$ $\color{red}{Internal}$ $\color{red}{Server}$ $\color{red}{Error}$ response will be returned.

    Example Response:
    ```json
    {
        "error": "Internal Server Error"
    }
    ```
## Conclusion

You have successfully explored the Azure Computer Vision API documentation. With these powerful endpoints, you can now integrate image analysis capabilities into your applications, extracting valuable insights from visual content.

## References

- [Azure Computer Vision API Documentation](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/)
- [Azure Computer Vision API Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/computer-vision/)