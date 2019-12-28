---
layout: page
title: Symfony configuration JSON schema
description: ''
categories: [schemas]
tags: [symfony, jsonschema]
---
```json
{
  "$schema": "http://json-schema-org/draft-07/schema#",
  "$id": "symfony.json",
  "$ref": "https://raw.githubusercontent.com/Hiberbee/schema/master/json/symfony.json",
  "definitions": {
    "PropertyInfo": {
      "type": "object",
      "title": "PropertyInfo",
      "properties": {
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "property_info",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "enabled"
      ]
    },
    "MessengerRoutingSender": {
      "type": "object",
      "title": "MessengerRoutingSender",
      "required": [
        "service"
      ],
      "properties": {
        "service": {
          "title": "service",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "service",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "messenger_routing_sender",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "service"
      ]
    },
    "CachePool": {
      "type": "object",
      "title": "CachePool",
      "required": [
        "name"
      ],
      "properties": {
        "adapter": {
          "title": "adapter",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/CachePoolAdapter"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "adapter",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        },
        "tags": {
          "title": "tags",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "tags",
            "namespaceURI": ""
          }
        },
        "_public": {
          "title": "_public",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "public",
            "namespaceURI": ""
          }
        },
        "defaultLifetime": {
          "title": "defaultLifetime",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/integer"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "default-lifetime",
            "namespaceURI": ""
          }
        },
        "provider": {
          "title": "provider",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "provider",
            "namespaceURI": ""
          }
        },
        "clearer": {
          "title": "clearer",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "clearer",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "cache_pool",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "adapter",
        "name",
        "tags",
        "_public",
        "defaultLifetime",
        "provider",
        "clearer"
      ]
    },
    "Cache": {
      "type": "object",
      "title": "Cache",
      "properties": {
        "app": {
          "title": "app",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "app",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "system": {
          "title": "system",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "system",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "directory": {
          "title": "directory",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "directory",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "defaultDoctrineProvider": {
          "title": "defaultDoctrineProvider",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "default-doctrine-provider",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "defaultPsr6Provider": {
          "title": "defaultPsr6Provider",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "default-psr6-provider",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "defaultRedisProvider": {
          "title": "defaultRedisProvider",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "default-redis-provider",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "defaultMemcachedProvider": {
          "title": "defaultMemcachedProvider",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "default-memcached-provider",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "defaultPdoProvider": {
          "title": "defaultPdoProvider",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "default-pdo-provider",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "pool": {
          "title": "pool",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/CachePool"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "pool",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "prefixSeed": {
          "title": "prefixSeed",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "prefix-seed",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "cache",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "app",
        "system",
        "directory",
        "defaultDoctrineProvider",
        "defaultPsr6Provider",
        "defaultRedisProvider",
        "defaultMemcachedProvider",
        "defaultPdoProvider",
        "pool",
        "prefixSeed"
      ]
    },
    "HttpClient": {
      "type": "object",
      "title": "HttpClient",
      "properties": {
        "defaultOptions": {
          "title": "defaultOptions",
          "allOf": [
            {
              "$ref": "#/definitions/HttpClientDefaultOptions"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "default-options",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "scopedClient": {
          "title": "scopedClient",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/HttpClientScopeOptions"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "scoped-client",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        },
        "maxHostConnections": {
          "title": "maxHostConnections",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/integer"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "max-host-connections",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "http_client",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "defaultOptions",
        "scopedClient",
        "enabled",
        "maxHostConnections"
      ]
    },
    "PhpErrors": {
      "type": "object",
      "title": "PhpErrors",
      "properties": {
        "log": {
          "title": "log",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "log",
            "namespaceURI": ""
          }
        },
        "_throw": {
          "title": "_throw",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "throw",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "php-errors",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "log",
        "_throw"
      ]
    },
    "Config": {
      "type": "object",
      "title": "Config",
      "properties": {
        "assetsOrFormOrCsrfProtection": {
          "title": "assetsOrFormOrCsrfProtection",
          "allOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Assets"
                      }
                    ],
                    "elementName": {
                      "localPart": "assets",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Form"
                      }
                    ],
                    "elementName": {
                      "localPart": "form",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/CsrfProtection"
                      }
                    ],
                    "elementName": {
                      "localPart": "csrf-protection",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Esi"
                      }
                    ],
                    "elementName": {
                      "localPart": "esi",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Ssi"
                      }
                    ],
                    "elementName": {
                      "localPart": "ssi",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Fragments"
                      }
                    ],
                    "elementName": {
                      "localPart": "fragments",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/WebLink"
                      }
                    ],
                    "elementName": {
                      "localPart": "web-link",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Profiler"
                      }
                    ],
                    "elementName": {
                      "localPart": "profiler",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Router"
                      }
                    ],
                    "elementName": {
                      "localPart": "router",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Session"
                      }
                    ],
                    "elementName": {
                      "localPart": "session",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Request"
                      }
                    ],
                    "elementName": {
                      "localPart": "request",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Translator"
                      }
                    ],
                    "elementName": {
                      "localPart": "translator",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Validation"
                      }
                    ],
                    "elementName": {
                      "localPart": "validation",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Annotations"
                      }
                    ],
                    "elementName": {
                      "localPart": "annotations",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/PropertyAccess"
                      }
                    ],
                    "elementName": {
                      "localPart": "property-access",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Serializer"
                      }
                    ],
                    "elementName": {
                      "localPart": "serializer",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/PropertyInfo"
                      }
                    ],
                    "elementName": {
                      "localPart": "property-info",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Cache"
                      }
                    ],
                    "elementName": {
                      "localPart": "cache",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Workflow"
                      }
                    ],
                    "elementName": {
                      "localPart": "workflow",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/PhpErrors"
                      }
                    ],
                    "elementName": {
                      "localPart": "php-errors",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Lock"
                      }
                    ],
                    "elementName": {
                      "localPart": "lock",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Messenger"
                      }
                    ],
                    "elementName": {
                      "localPart": "messenger",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/HttpClient"
                      }
                    ],
                    "elementName": {
                      "localPart": "http-client",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/Mailer"
                      }
                    ],
                    "elementName": {
                      "localPart": "mailer",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  }
                ]
              },
              "minItems": 0
            }
          ],
          "propertyType": "elements"
        },
        "httpMethodOverride": {
          "title": "httpMethodOverride",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "http-method-override",
            "namespaceURI": ""
          }
        },
        "ide": {
          "title": "ide",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "ide",
            "namespaceURI": ""
          }
        },
        "secret": {
          "title": "secret",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "secret",
            "namespaceURI": ""
          }
        },
        "defaultLocale": {
          "title": "defaultLocale",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "default-locale",
            "namespaceURI": ""
          }
        },
        "test": {
          "title": "test",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "test",
            "namespaceURI": ""
          }
        },
        "errorController": {
          "title": "errorController",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "error-controller",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "config",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "assetsOrFormOrCsrfProtection",
        "httpMethodOverride",
        "ide",
        "secret",
        "defaultLocale",
        "test",
        "errorController"
      ]
    },
    "Form": {
      "type": "object",
      "title": "Form",
      "properties": {
        "csrfProtection": {
          "title": "csrfProtection",
          "allOf": [
            {
              "$ref": "#/definitions/FormCsrfProtection"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "csrf-protection",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "form",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "csrfProtection",
        "enabled"
      ]
    },
    "Validation": {
      "type": "object",
      "title": "Validation",
      "properties": {
        "staticMethodOrMappingOrAutoMapping": {
          "title": "staticMethodOrMappingOrAutoMapping",
          "allOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "anyOf": [
                      {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
                      }
                    ],
                    "elementName": {
                      "localPart": "static-method",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/FileMapping"
                      }
                    ],
                    "elementName": {
                      "localPart": "mapping",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "anyOf": [
                      {
                        "$ref": "#/definitions/AutoMapping"
                      }
                    ],
                    "elementName": {
                      "localPart": "auto-mapping",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  }
                ]
              },
              "minItems": 0
            }
          ],
          "propertyType": "elements"
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        },
        "cache": {
          "title": "cache",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cache",
            "namespaceURI": ""
          }
        },
        "enableAnnotations": {
          "title": "enableAnnotations",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enable-annotations",
            "namespaceURI": ""
          }
        },
        "staticMethod": {
          "title": "staticMethod",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "static-method",
            "namespaceURI": ""
          }
        },
        "translationDomain": {
          "title": "translationDomain",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "translation-domain",
            "namespaceURI": ""
          }
        },
        "strictEmail": {
          "title": "strictEmail",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "strict-email",
            "namespaceURI": ""
          }
        },
        "emailValidationMode": {
          "title": "emailValidationMode",
          "allOf": [
            {
              "$ref": "#/definitions/EmailValidationMode"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "email-validation-mode",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "validation",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "staticMethodOrMappingOrAutoMapping",
        "enabled",
        "cache",
        "enableAnnotations",
        "staticMethod",
        "translationDomain",
        "strictEmail",
        "emailValidationMode"
      ]
    },
    "Fingerprint": {
      "type": "object",
      "title": "Fingerprint",
      "properties": {
        "pinSha256OrSha1OrMd5": {
          "title": "pinSha256OrSha1OrMd5",
          "allOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
                      }
                    },
                    "elementName": {
                      "localPart": "pin-sha256",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
                      }
                    },
                    "elementName": {
                      "localPart": "sha1",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
                      }
                    },
                    "elementName": {
                      "localPart": "md5",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  }
                ]
              },
              "minItems": 0
            }
          ],
          "propertyType": "elementRefs"
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "fingerprint",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "pinSha256OrSha1OrMd5"
      ]
    },
    "Mailer": {
      "type": "object",
      "title": "Mailer",
      "properties": {
        "envelope": {
          "title": "envelope",
          "allOf": [
            {
              "$ref": "#/definitions/MailerEnvelope"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "envelope",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "dsn": {
          "title": "dsn",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "dsn",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "mailer",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "envelope",
        "dsn"
      ]
    },
    "Serializer": {
      "type": "object",
      "title": "Serializer",
      "properties": {
        "mapping": {
          "title": "mapping",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/FileMapping"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "mapping",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        },
        "enableAnnotations": {
          "title": "enableAnnotations",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enable-annotations",
            "namespaceURI": ""
          }
        },
        "nameConverter": {
          "title": "nameConverter",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name-converter",
            "namespaceURI": ""
          }
        },
        "circularReferenceHandler": {
          "title": "circularReferenceHandler",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "circular-reference-handler",
            "namespaceURI": ""
          }
        },
        "maxDepthHandler": {
          "title": "maxDepthHandler",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "max-depth-handler",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "serializer",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "mapping",
        "enabled",
        "enableAnnotations",
        "nameConverter",
        "circularReferenceHandler",
        "maxDepthHandler"
      ]
    },
    "Fragments": {
      "type": "object",
      "title": "Fragments",
      "properties": {
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        },
        "path": {
          "title": "path",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "path",
            "namespaceURI": ""
          }
        },
        "hincludeDefaultTemplate": {
          "title": "hincludeDefaultTemplate",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "hinclude-default-template",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "fragments",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "enabled",
        "path",
        "hincludeDefaultTemplate"
      ]
    },
    "Lock": {
      "type": "object",
      "title": "Lock",
      "required": [
        "resource"
      ],
      "properties": {
        "resource": {
          "title": "resource",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/LockResource"
              },
              "minItems": 1
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "resource",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "lock",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "resource",
        "enabled"
      ]
    },
    "FormCsrfProtection": {
      "type": "object",
      "title": "FormCsrfProtection",
      "properties": {
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        },
        "fieldName": {
          "title": "fieldName",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "field-name",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "form_csrf_protection",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "enabled",
        "fieldName"
      ]
    },
    "Annotations": {
      "type": "object",
      "title": "Annotations",
      "properties": {
        "cache": {
          "title": "cache",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cache",
            "namespaceURI": ""
          }
        },
        "debug": {
          "title": "debug",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "debug",
            "namespaceURI": ""
          }
        },
        "fileCacheDir": {
          "title": "fileCacheDir",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "file-cache-dir",
            "namespaceURI": ""
          }
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "annotations",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "cache",
        "debug",
        "fileCacheDir",
        "enabled"
      ]
    },
    "Router": {
      "type": "object",
      "title": "Router",
      "properties": {
        "resource": {
          "title": "resource",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "resource",
            "namespaceURI": ""
          }
        },
        "type": {
          "title": "type",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "type",
            "namespaceURI": ""
          }
        },
        "httpPort": {
          "title": "httpPort",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "http-port",
            "namespaceURI": ""
          }
        },
        "httpsPort": {
          "title": "httpsPort",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "https-port",
            "namespaceURI": ""
          }
        },
        "strictRequirements": {
          "title": "strictRequirements",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "strict-requirements",
            "namespaceURI": ""
          }
        },
        "utf8": {
          "title": "utf8",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "utf8",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "router",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "resource",
        "type",
        "httpPort",
        "httpsPort",
        "strictRequirements",
        "utf8"
      ]
    },
    "PropertyAccess": {
      "type": "object",
      "title": "PropertyAccess",
      "properties": {
        "magicCall": {
          "title": "magicCall",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "magic-call",
            "namespaceURI": ""
          }
        },
        "throwExceptionOnInvalidIndex": {
          "title": "throwExceptionOnInvalidIndex",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "throw-exception-on-invalid-index",
            "namespaceURI": ""
          }
        },
        "throwExceptionOnInvalidPropertyPath": {
          "title": "throwExceptionOnInvalidPropertyPath",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "throw-exception-on-invalid-property-path",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "property_access",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "magicCall",
        "throwExceptionOnInvalidIndex",
        "throwExceptionOnInvalidPropertyPath"
      ]
    },
    "MessengerMiddleware": {
      "type": "object",
      "title": "MessengerMiddleware",
      "required": [
        "id"
      ],
      "properties": {
        "argument": {
          "title": "argument",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/anyType"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "argument",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "id": {
          "title": "id",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "id",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "messenger_middleware",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "argument",
        "id"
      ]
    },
    "Esi": {
      "type": "object",
      "title": "Esi",
      "properties": {
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "esi",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "enabled"
      ]
    },
    "LockResource": {
      "type": "object",
      "title": "LockResource",
      "properties": {
        "value": {
          "title": "value",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "value"
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "lock_resource",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "value",
        "name"
      ]
    },
    "Translator": {
      "type": "object",
      "title": "Translator",
      "properties": {
        "fallback": {
          "title": "fallback",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "fallback",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "path": {
          "title": "path",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "path",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        },
        "logging": {
          "title": "logging",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "logging",
            "namespaceURI": ""
          }
        },
        "formatter": {
          "title": "formatter",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "formatter",
            "namespaceURI": ""
          }
        },
        "cacheDir": {
          "title": "cacheDir",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cache-dir",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "translator",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "fallback",
        "path",
        "enabled",
        "logging",
        "formatter",
        "cacheDir"
      ]
    },
    "HttpResolve": {
      "type": "object",
      "title": "HttpResolve",
      "properties": {
        "content": {
          "title": "content",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "value"
        },
        "host": {
          "title": "host",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "host",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "http_resolve",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "content",
        "host"
      ]
    },
    "HttpQuery": {
      "type": "object",
      "title": "HttpQuery",
      "properties": {
        "content": {
          "title": "content",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "value"
        },
        "key": {
          "title": "key",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "key",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "http_query",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "content",
        "key"
      ]
    },
    "Package": {
      "type": "object",
      "title": "Package",
      "required": [
        "name"
      ],
      "properties": {
        "baseUrl": {
          "title": "baseUrl",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "base-url",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        },
        "basePath": {
          "title": "basePath",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "base-path",
            "namespaceURI": ""
          }
        },
        "versionStrategy": {
          "title": "versionStrategy",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "version-strategy",
            "namespaceURI": ""
          }
        },
        "version": {
          "title": "version",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "version",
            "namespaceURI": ""
          }
        },
        "versionFormat": {
          "title": "versionFormat",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "version-format",
            "namespaceURI": ""
          }
        },
        "jsonManifestPath": {
          "title": "jsonManifestPath",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "json-manifest-path",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "package",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "baseUrl",
        "name",
        "basePath",
        "versionStrategy",
        "version",
        "versionFormat",
        "jsonManifestPath"
      ]
    },
    "Place": {
      "type": "object",
      "title": "Place",
      "properties": {
        "content": {
          "title": "content",
          "allOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "#/definitions/Metadata"
                      }
                    },
                    "elementName": {
                      "localPart": "metadata",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  }
                ]
              }
            }
          ],
          "propertyType": "elementRef",
          "elementName": {
            "localPart": "metadata",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "place",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "content",
        "name"
      ]
    },
    "HttpClientDefaultOptions": {
      "type": "object",
      "title": "HttpClientDefaultOptions",
      "properties": {
        "content": {
          "title": "content",
          "allOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "#/definitions/HttpHeader"
                      }
                    },
                    "elementName": {
                      "localPart": "header",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "#/definitions/HttpResolve"
                      }
                    },
                    "elementName": {
                      "localPart": "resolve",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "#/definitions/Fingerprint"
                      }
                    },
                    "elementName": {
                      "localPart": "peer-fingerprint",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  }
                ]
              }
            }
          ],
          "propertyType": "elementRefs"
        },
        "maxRedirects": {
          "title": "maxRedirects",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/integer"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "max-redirects",
            "namespaceURI": ""
          }
        },
        "httpVersion": {
          "title": "httpVersion",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "http-version",
            "namespaceURI": ""
          }
        },
        "proxy": {
          "title": "proxy",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "proxy",
            "namespaceURI": ""
          }
        },
        "noProxy": {
          "title": "noProxy",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "no-proxy",
            "namespaceURI": ""
          }
        },
        "timeout": {
          "title": "timeout",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/float"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "timeout",
            "namespaceURI": ""
          }
        },
        "maxDuration": {
          "title": "maxDuration",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/float"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "max-duration",
            "namespaceURI": ""
          }
        },
        "bindto": {
          "title": "bindto",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "bindto",
            "namespaceURI": ""
          }
        },
        "verifyPeer": {
          "title": "verifyPeer",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "verify-peer",
            "namespaceURI": ""
          }
        },
        "verifyHost": {
          "title": "verifyHost",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "verify-host",
            "namespaceURI": ""
          }
        },
        "cafile": {
          "title": "cafile",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cafile",
            "namespaceURI": ""
          }
        },
        "capath": {
          "title": "capath",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "capath",
            "namespaceURI": ""
          }
        },
        "localCert": {
          "title": "localCert",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "local-cert",
            "namespaceURI": ""
          }
        },
        "localPk": {
          "title": "localPk",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "local-pk",
            "namespaceURI": ""
          }
        },
        "passphrase": {
          "title": "passphrase",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "passphrase",
            "namespaceURI": ""
          }
        },
        "ciphers": {
          "title": "ciphers",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "ciphers",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "http_client_default_options",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "content",
        "maxRedirects",
        "httpVersion",
        "proxy",
        "noProxy",
        "timeout",
        "maxDuration",
        "bindto",
        "verifyPeer",
        "verifyHost",
        "cafile",
        "capath",
        "localCert",
        "localPk",
        "passphrase",
        "ciphers"
      ]
    },
    "CachePoolAdapter": {
      "type": "object",
      "title": "CachePoolAdapter",
      "required": [
        "name"
      ],
      "properties": {
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        },
        "provider": {
          "title": "provider",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "provider",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "cache_pool_adapter",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "name",
        "provider"
      ]
    },
    "MessengerBus": {
      "type": "object",
      "title": "MessengerBus",
      "required": [
        "name"
      ],
      "properties": {
        "middleware": {
          "title": "middleware",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/MessengerMiddleware"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "middleware",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        },
        "defaultMiddleware": {
          "title": "defaultMiddleware",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "default-middleware",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "messenger_bus",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "middleware",
        "name",
        "defaultMiddleware"
      ]
    },
    "Assets": {
      "type": "object",
      "title": "Assets",
      "properties": {
        "baseUrl": {
          "title": "baseUrl",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "base-url",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "_package": {
          "title": "_package",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Package"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "package",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        },
        "basePath": {
          "title": "basePath",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "base-path",
            "namespaceURI": ""
          }
        },
        "versionStrategy": {
          "title": "versionStrategy",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "version-strategy",
            "namespaceURI": ""
          }
        },
        "version": {
          "title": "version",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "version",
            "namespaceURI": ""
          }
        },
        "versionFormat": {
          "title": "versionFormat",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "version-format",
            "namespaceURI": ""
          }
        },
        "jsonManifestPath": {
          "title": "jsonManifestPath",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "json-manifest-path",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "assets",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "baseUrl",
        "_package",
        "enabled",
        "basePath",
        "versionStrategy",
        "version",
        "versionFormat",
        "jsonManifestPath"
      ]
    },
    "MessengerRouting": {
      "type": "object",
      "title": "MessengerRouting",
      "required": [
        "messageClass"
      ],
      "properties": {
        "sender": {
          "title": "sender",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/MessengerRoutingSender"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "sender",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "messageClass": {
          "title": "messageClass",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "message-class",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "messenger_routing",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "sender",
        "messageClass"
      ]
    },
    "HttpClientScopeOptions": {
      "type": "object",
      "title": "HttpClientScopeOptions",
      "properties": {
        "content": {
          "title": "content",
          "allOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "#/definitions/HttpQuery"
                      }
                    },
                    "elementName": {
                      "localPart": "query",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "#/definitions/HttpResolve"
                      }
                    },
                    "elementName": {
                      "localPart": "resolve",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "#/definitions/HttpHeader"
                      }
                    },
                    "elementName": {
                      "localPart": "header",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  },
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                      },
                      "value": {
                        "$ref": "#/definitions/Fingerprint"
                      }
                    },
                    "elementName": {
                      "localPart": "peer-fingerprint",
                      "namespaceURI": "http://symfony.com/schema/dic/symfony"
                    }
                  }
                ]
              }
            }
          ],
          "propertyType": "elementRefs"
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        },
        "scope": {
          "title": "scope",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "scope",
            "namespaceURI": ""
          }
        },
        "baseUri": {
          "title": "baseUri",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "base-uri",
            "namespaceURI": ""
          }
        },
        "authBasic": {
          "title": "authBasic",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "auth-basic",
            "namespaceURI": ""
          }
        },
        "authBearer": {
          "title": "authBearer",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "auth-bearer",
            "namespaceURI": ""
          }
        },
        "maxRedirects": {
          "title": "maxRedirects",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/integer"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "max-redirects",
            "namespaceURI": ""
          }
        },
        "httpVersion": {
          "title": "httpVersion",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "http-version",
            "namespaceURI": ""
          }
        },
        "proxy": {
          "title": "proxy",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "proxy",
            "namespaceURI": ""
          }
        },
        "noProxy": {
          "title": "noProxy",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "no-proxy",
            "namespaceURI": ""
          }
        },
        "timeout": {
          "title": "timeout",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/float"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "timeout",
            "namespaceURI": ""
          }
        },
        "bindto": {
          "title": "bindto",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "bindto",
            "namespaceURI": ""
          }
        },
        "verifyPeer": {
          "title": "verifyPeer",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "verify-peer",
            "namespaceURI": ""
          }
        },
        "verifyHost": {
          "title": "verifyHost",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "verify-host",
            "namespaceURI": ""
          }
        },
        "cafile": {
          "title": "cafile",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cafile",
            "namespaceURI": ""
          }
        },
        "capath": {
          "title": "capath",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "capath",
            "namespaceURI": ""
          }
        },
        "localCert": {
          "title": "localCert",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "local-cert",
            "namespaceURI": ""
          }
        },
        "localPk": {
          "title": "localPk",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "local-pk",
            "namespaceURI": ""
          }
        },
        "passphrase": {
          "title": "passphrase",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "passphrase",
            "namespaceURI": ""
          }
        },
        "ciphers": {
          "title": "ciphers",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "ciphers",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "http_client_scope_options",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "content",
        "name",
        "scope",
        "baseUri",
        "authBasic",
        "authBearer",
        "maxRedirects",
        "httpVersion",
        "proxy",
        "noProxy",
        "timeout",
        "bindto",
        "verifyPeer",
        "verifyHost",
        "cafile",
        "capath",
        "localCert",
        "localPk",
        "passphrase",
        "ciphers"
      ]
    },
    "Workflow": {
      "type": "object",
      "title": "Workflow",
      "properties": {
        "initialMarking": {
          "title": "initialMarking",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "initial-marking",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "markingStore": {
          "title": "markingStore",
          "allOf": [
            {
              "$ref": "#/definitions/MarkingStore"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "marking-store",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "support": {
          "title": "support",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "support",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "place": {
          "title": "place",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Place"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "place",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "transition": {
          "title": "transition",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Transition"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "transition",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "metadata": {
          "title": "metadata",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Metadata"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "metadata",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        },
        "type": {
          "title": "type",
          "allOf": [
            {
              "$ref": "#/definitions/WorkflowType"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "type",
            "namespaceURI": ""
          }
        },
        "initialPlace": {
          "title": "initialPlace",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "initial-place",
            "namespaceURI": ""
          }
        },
        "supportStrategy": {
          "title": "supportStrategy",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "support-strategy",
            "namespaceURI": ""
          }
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "workflow",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "initialMarking",
        "markingStore",
        "support",
        "place",
        "transition",
        "metadata",
        "name",
        "type",
        "initialPlace",
        "supportStrategy",
        "enabled"
      ]
    },
    "Transition": {
      "type": "object",
      "title": "Transition",
      "required": [
        "from",
        "to",
        "name"
      ],
      "properties": {
        "from": {
          "title": "from",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 1
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "from",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "to": {
          "title": "to",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 1
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "to",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "metadata": {
          "title": "metadata",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Metadata"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "metadata",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "guard": {
          "title": "guard",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "guard",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "transition",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "from",
        "to",
        "metadata",
        "guard",
        "name"
      ]
    },
    "MessengerSerializer": {
      "type": "object",
      "title": "MessengerSerializer",
      "properties": {
        "symfonySerializer": {
          "title": "symfonySerializer",
          "allOf": [
            {
              "$ref": "#/definitions/MessengerSymfonySerializer"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "symfony-serializer",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "defaultSerializer": {
          "title": "defaultSerializer",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "default-serializer",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "messenger_serializer",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "symfonySerializer",
        "defaultSerializer"
      ]
    },
    "FileMapping": {
      "type": "object",
      "title": "FileMapping",
      "required": [
        "path"
      ],
      "properties": {
        "path": {
          "title": "path",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 1
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "path",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "file_mapping",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "path"
      ]
    },
    "MarkingStore": {
      "type": "object",
      "title": "MarkingStore",
      "properties": {
        "argument": {
          "title": "argument",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "argument",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "type": {
          "title": "type",
          "allOf": [
            {
              "$ref": "#/definitions/MarkingStoreType"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "type",
            "namespaceURI": ""
          }
        },
        "service": {
          "title": "service",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "service",
            "namespaceURI": ""
          }
        },
        "property": {
          "title": "property",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "property",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "marking_store",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "argument",
        "type",
        "service",
        "property"
      ]
    },
    "Session": {
      "type": "object",
      "title": "Session",
      "properties": {
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        },
        "storageId": {
          "title": "storageId",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "storage-id",
            "namespaceURI": ""
          }
        },
        "handlerId": {
          "title": "handlerId",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "handler-id",
            "namespaceURI": ""
          }
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        },
        "cookieLifetime": {
          "title": "cookieLifetime",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cookie-lifetime",
            "namespaceURI": ""
          }
        },
        "cookiePath": {
          "title": "cookiePath",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cookie-path",
            "namespaceURI": ""
          }
        },
        "cookieDomain": {
          "title": "cookieDomain",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cookie-domain",
            "namespaceURI": ""
          }
        },
        "cookieSecure": {
          "title": "cookieSecure",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cookie-secure",
            "namespaceURI": ""
          }
        },
        "cookieHttponly": {
          "title": "cookieHttponly",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cookie-httponly",
            "namespaceURI": ""
          }
        },
        "cookieSamesite": {
          "title": "cookieSamesite",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cookie-samesite",
            "namespaceURI": ""
          }
        },
        "useCookies": {
          "title": "useCookies",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "use-cookies",
            "namespaceURI": ""
          }
        },
        "cacheLimiter": {
          "title": "cacheLimiter",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "cache-limiter",
            "namespaceURI": ""
          }
        },
        "gcMaxlifetime": {
          "title": "gcMaxlifetime",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "gc-maxlifetime",
            "namespaceURI": ""
          }
        },
        "gcDivisor": {
          "title": "gcDivisor",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "gc-divisor",
            "namespaceURI": ""
          }
        },
        "gcProbability": {
          "title": "gcProbability",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "gc-probability",
            "namespaceURI": ""
          }
        },
        "savePath": {
          "title": "savePath",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "save-path",
            "namespaceURI": ""
          }
        },
        "metadataUpdateThreshold": {
          "title": "metadataUpdateThreshold",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/nonNegativeInteger"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "metadata-update-threshold",
            "namespaceURI": ""
          }
        },
        "sidLength": {
          "title": "sidLength",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/positiveInteger"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "sid-length",
            "namespaceURI": ""
          }
        },
        "sidBitsPerCharacter": {
          "title": "sidBitsPerCharacter",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/positiveInteger"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "sid-bits-per-character",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "session",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "enabled",
        "storageId",
        "handlerId",
        "name",
        "cookieLifetime",
        "cookiePath",
        "cookieDomain",
        "cookieSecure",
        "cookieHttponly",
        "cookieSamesite",
        "useCookies",
        "cacheLimiter",
        "gcMaxlifetime",
        "gcDivisor",
        "gcProbability",
        "savePath",
        "metadataUpdateThreshold",
        "sidLength",
        "sidBitsPerCharacter"
      ]
    },
    "AutoMapping": {
      "type": "object",
      "title": "AutoMapping",
      "required": [
        "namespace"
      ],
      "properties": {
        "service": {
          "title": "service",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "service",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "namespace": {
          "title": "namespace",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "namespace",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "auto_mapping",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "service",
        "namespace"
      ]
    },
    "MessengerTransport": {
      "type": "object",
      "title": "MessengerTransport",
      "properties": {
        "options": {
          "title": "options",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Metadata"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "options",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        },
        "serializer": {
          "title": "serializer",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "serializer",
            "namespaceURI": ""
          }
        },
        "dsn": {
          "title": "dsn",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "dsn",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "messenger_transport",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "options",
        "name",
        "serializer",
        "dsn"
      ]
    },
    "MailerEnvelope": {
      "type": "object",
      "title": "MailerEnvelope",
      "required": [
        "sender"
      ],
      "properties": {
        "sender": {
          "title": "sender",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "sender",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "recipients": {
          "title": "recipients",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "recipients",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "mailer_envelope",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "sender",
        "recipients"
      ]
    },
    "Ssi": {
      "type": "object",
      "title": "Ssi",
      "properties": {
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "ssi",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "enabled"
      ]
    },
    "Format": {
      "type": "object",
      "title": "Format",
      "required": [
        "mimeType",
        "name"
      ],
      "properties": {
        "mimeType": {
          "title": "mimeType",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 1
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "mime-type",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "format",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "mimeType",
        "name"
      ]
    },
    "HttpHeader": {
      "type": "object",
      "title": "HttpHeader",
      "properties": {
        "content": {
          "title": "content",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "value"
        },
        "name": {
          "title": "name",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "name",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "http_header",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "content",
        "name"
      ]
    },
    "Request": {
      "type": "object",
      "title": "Request",
      "properties": {
        "format": {
          "title": "format",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Format"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "format",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "request",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "format"
      ]
    },
    "Metadata": {
      "type": "object",
      "title": "Metadata",
      "properties": {
        "any": {
          "title": "any",
          "allOf": [
            {
              "anyOf": [
                {
                  "$ref": "http://www.jsonix.org/jsonschemas/jsonix/Jsonix.jsonschema#/definitions/dom"
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
                    },
                    "value": {
                    }
                  }
                }
              ]
            }
          ],
          "propertyType": "anyElement"
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "metadata",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "any"
      ]
    },
    "Messenger": {
      "type": "object",
      "title": "Messenger",
      "properties": {
        "serializer": {
          "title": "serializer",
          "allOf": [
            {
              "$ref": "#/definitions/MessengerSerializer"
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "serializer",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "routing": {
          "title": "routing",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/MessengerRouting"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "routing",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "transport": {
          "title": "transport",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/MessengerTransport"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "transport",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "bus": {
          "title": "bus",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/MessengerBus"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "bus",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "defaultBus": {
          "title": "defaultBus",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "default-bus",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "messenger",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "serializer",
        "routing",
        "transport",
        "bus",
        "defaultBus"
      ]
    },
    "FormResources": {
      "type": "object",
      "title": "FormResources",
      "required": [
        "resource"
      ],
      "properties": {
        "resource": {
          "title": "resource",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
              },
              "minItems": 1
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "resource",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "form-resources",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "resource"
      ]
    },
    "CsrfProtection": {
      "type": "object",
      "title": "CsrfProtection",
      "properties": {
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "csrf_protection",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "enabled"
      ]
    },
    "MessengerSymfonySerializer": {
      "type": "object",
      "title": "MessengerSymfonySerializer",
      "properties": {
        "context": {
          "title": "context",
          "allOf": [
            {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Metadata"
              },
              "minItems": 0
            }
          ],
          "propertyType": "element",
          "elementName": {
            "localPart": "context",
            "namespaceURI": "http://symfony.com/schema/dic/symfony"
          }
        },
        "format": {
          "title": "format",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "format",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "messenger_symfony_serializer",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "context",
        "format"
      ]
    },
    "WebLink": {
      "type": "object",
      "title": "WebLink",
      "properties": {
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/boolean"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "web_link",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "enabled"
      ]
    },
    "Profiler": {
      "type": "object",
      "title": "Profiler",
      "properties": {
        "collect": {
          "title": "collect",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "collect",
            "namespaceURI": ""
          }
        },
        "onlyExceptions": {
          "title": "onlyExceptions",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "only-exceptions",
            "namespaceURI": ""
          }
        },
        "onlyMasterRequests": {
          "title": "onlyMasterRequests",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "only-master-requests",
            "namespaceURI": ""
          }
        },
        "enabled": {
          "title": "enabled",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "enabled",
            "namespaceURI": ""
          }
        },
        "dsn": {
          "title": "dsn",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "dsn",
            "namespaceURI": ""
          }
        },
        "username": {
          "title": "username",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "username",
            "namespaceURI": ""
          }
        },
        "password": {
          "title": "password",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "password",
            "namespaceURI": ""
          }
        },
        "lifetime": {
          "title": "lifetime",
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
            }
          ],
          "propertyType": "attribute",
          "attributeName": {
            "localPart": "lifetime",
            "namespaceURI": ""
          }
        }
      },
      "typeType": "classInfo",
      "typeName": {
        "localPart": "profiler",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "propertiesOrder": [
        "collect",
        "onlyExceptions",
        "onlyMasterRequests",
        "enabled",
        "dsn",
        "username",
        "password",
        "lifetime"
      ]
    },
    "MarkingStoreType": {
      "allOf": [
        {
          "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
        }
      ],
      "typeType": "enumInfo",
      "typeName": {
        "localPart": "marking_store_type",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      }
    },
    "EmailValidationMode": {
      "allOf": [
        {
          "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
        }
      ],
      "typeType": "enumInfo",
      "typeName": {
        "localPart": "email-validation-mode",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      }
    },
    "WorkflowType": {
      "allOf": [
        {
          "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
        }
      ],
      "typeType": "enumInfo",
      "typeName": {
        "localPart": "workflow_type",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      }
    }
  },
  "anyOf": [
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "resolve"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/HttpResolve"
        }
      },
      "elementName": {
        "localPart": "resolve",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/HttpClientDefaultOptions"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "metadata"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/Metadata"
        }
      },
      "elementName": {
        "localPart": "metadata",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/Place"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "header"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/HttpHeader"
        }
      },
      "elementName": {
        "localPart": "header",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/HttpClientScopeOptions"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "peer-fingerprint"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/Fingerprint"
        }
      },
      "elementName": {
        "localPart": "peer-fingerprint",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/HttpClientScopeOptions"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "header"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/HttpHeader"
        }
      },
      "elementName": {
        "localPart": "header",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/HttpClientDefaultOptions"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "query"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/HttpQuery"
        }
      },
      "elementName": {
        "localPart": "query",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/HttpClientScopeOptions"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "resolve"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/HttpResolve"
        }
      },
      "elementName": {
        "localPart": "resolve",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/HttpClientScopeOptions"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "config"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/Config"
        }
      },
      "elementName": {
        "localPart": "config",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "md5"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
        }
      },
      "elementName": {
        "localPart": "md5",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/Fingerprint"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "sha1"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
        }
      },
      "elementName": {
        "localPart": "sha1",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/Fingerprint"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "pin-sha256"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/string"
        }
      },
      "elementName": {
        "localPart": "pin-sha256",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/Fingerprint"
      }
    },
    {
      "type": "object",
      "properties": {
        "name": {
          "allOf": [
            {
              "$ref": "http://www.jsonix.org/jsonschemas/w3c/2001/XMLSchema.jsonschema#/definitions/QName"
            },
            {
              "type": "object",
              "properties": {
                "localPart": {
                  "enum": [
                    "peer-fingerprint"
                  ]
                },
                "namespaceURI": {
                  "enum": [
                    "http://symfony.com/schema/dic/symfony"
                  ]
                }
              }
            }
          ]
        },
        "value": {
          "$ref": "#/definitions/Fingerprint"
        }
      },
      "elementName": {
        "localPart": "peer-fingerprint",
        "namespaceURI": "http://symfony.com/schema/dic/symfony"
      },
      "scope": {
        "$ref": "#/definitions/HttpClientDefaultOptions"
      }
    }
  ]
}
```