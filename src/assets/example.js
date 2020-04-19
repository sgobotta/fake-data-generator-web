export default `{
  "config": {
    "locale": "en"
  },
  "amount": 2,
  "model": {
    "id": {
      "type": "randomNumberBetween",
      "value": [1, 2500000]
    },
    "title": {
      "type": "faker",
      "value": "lorem.words"
    },
    "content": {
      "type": "faker",
      "value": "lorem.paragraph"
    },
    "updatedAt": {
      "type": "faker",
      "value": "date.recent"
    },
    "publicationDate": {
      "type": "faker",
      "value": "date.between",
      "options": ["2019-01-02", "2019-12-29"]
    },
    "issue": {
      "type": "prepend",
      "options": {
        "text": "#"
      },
      "value": {
        "type": "randomNumberBetween",
        "value": [1, 2500]
      }
    },
    "fileName": {
      "type": "append",
      "options": {"text": ".pdf"},
      "value": {
        "type": "faker",
        "value": "random.words"
      }
    },
    "publication": {
      "type": "randomNumberBetweenWithString",
      "value": [1, 2500000],
      "options": {
        "prefix": "#",
        "suffix": "*"
      }
    },
    "stats": {
      "type": "Array",
      "options": {
        "size": 10
      },
      "value": {
        "type": "Object",
        "value": {
          "likes": {
            "type": "randomNumberBetween",
            "value": [0, 40]
          },
          "dislikes": {
            "type": "randomNumberBetween",
            "value": [0, 40]
          }
        }
      }
    },
    "author": {
      "type": "Object",
      "value": {
        "firstName": {
          "type": "faker",
          "value": "name.firstName"
        },
        "lastName": {
          "type": "faker",
          "value": "name.lastName"
        },
        "address": {
          "type": "Object",
          "value": {
            "street": {
              "type": "faker",
              "value": "address.streetAddress"
            },
            "city": {
              "type": "faker",
              "value": "address.city"
            },
            "state": {
              "type": "faker",
              "value": "address.state"
            },
            "zipCode": {
              "type": "faker",
              "value": "address.zipCode"
            },
            "country": {
              "type": "faker",
              "value": "address.country"
            }
          }
        }
      }
    }
  }
}`
