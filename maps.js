/**
 * Each map array contains objects with 2 attributes for the coordinates of corners 
 * and fill type. The last object in the array is ALWAYS the target object (the object 
 * that the rover wants to collide with).
 */

//Very simple map
const map1 = [
    {
        "points": [
            {
                "x": 130,
                "y": 639
            },
            {
                "x": 224,
                "y": 531
            },
            {
                "x": 288,
                "y": 405
            },
            {
                "x": 412,
                "y": 344
            },
            {
                "x": 526,
                "y": 307
            },
            {
                "x": 600,
                "y": 328
            },
            {
                "x": 658,
                "y": 387
            },
            {
                "x": 742,
                "y": 415
            },
            {
                "x": 813,
                "y": 487
            },
            {
                "x": 936,
                "y": 529
            },
            {
                "x": 991,
                "y": 574
            },
            {
                "x": 1080,
                "y": 627
            },
            {
                "x": 1150,
                "y": 640
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 10,
                "y": 529
            },
            {
                "x": 94,
                "y": 505
            },
            {
                "x": 150,
                "y": 403
            },
            {
                "x": 229,
                "y": 341
            },
            {
                "x": 335,
                "y": 304
            },
            {
                "x": 424,
                "y": 249
            },
            {
                "x": 550,
                "y": 273
            },
            {
                "x": 642,
                "y": 305
            },
            {
                "x": 713,
                "y": 363
            },
            {
                "x": 802,
                "y": 369
            },
            {
                "x": 892,
                "y": 338
            },
            {
                "x": 948,
                "y": 450
            },
            {
                "x": 1056,
                "y": 440
            },
            {
                "x": 1089,
                "y": 367
            },
            {
                "x": 1005,
                "y": 247
            },
            {
                "x": 921,
                "y": 99
            },
            {
                "x": 888,
                "y": 6
            },
            {
                "x": 4,
                "y": 3
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 832,
                "y": 458
            },
            {
                "x": 874,
                "y": 461
            },
            {
                "x": 905,
                "y": 438
            },
            {
                "x": 892,
                "y": 397
            },
            {
                "x": 848,
                "y": 387
            },
            {
                "x": 798,
                "y": 407
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 987,
                "y": 481
            },
            {
                "x": 1054,
                "y": 472
            },
            {
                "x": 1092,
                "y": 440
            },
            {
                "x": 1168,
                "y": 424
            },
            {
                "x": 1176,
                "y": 376
            },
            {
                "x": 1232,
                "y": 394
            },
            {
                "x": 1200,
                "y": 477
            },
            {
                "x": 1141,
                "y": 503
            },
            {
                "x": 1088,
                "y": 556
            },
            {
                "x": 1056,
                "y": 525
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 1158,
                "y": 639
            },
            {
                "x": 1273,
                "y": 638
            },
            {
                "x": 1272,
                "y": 282
            },
            {
                "x": 1196,
                "y": 261
            },
            {
                "x": 1148,
                "y": 289
            },
            {
                "x": 1221,
                "y": 324
            },
            {
                "x": 1253,
                "y": 371
            },
            {
                "x": 1246,
                "y": 448
            },
            {
                "x": 1212,
                "y": 569
            },
            {
                "x": 1186,
                "y": 581
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 1269,
                "y": 143
            },
            {
                "x": 1266,
                "y": 196
            },
            {
                "x": 1180,
                "y": 251
            },
            {
                "x": 1104,
                "y": 217
            },
            {
                "x": 1058,
                "y": 227
            },
            {
                "x": 1041,
                "y": 137
            },
            {
                "x": 969,
                "y": 81
            },
            {
                "x": 1021,
                "y": 35
            },
            {
                "x": 1068,
                "y": 61
            },
            {
                "x": 1113,
                "y": 110
            },
            {
                "x": 1182,
                "y": 121
            },
            {
                "x": 1229,
                "y": 118
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 994,
                "y": 452
            },
            {
                "x": 1008,
                "y": 448
            },
            {
                "x": 1027,
                "y": 455
            },
            {
                "x": 1021,
                "y": 470
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 1091,
                "y": 1
            },
            {
                "x": 1124,
                "y": 18
            },
            {
                "x": 1143,
                "y": 77
            },
            {
                "x": 1168,
                "y": 98
            },
            {
                "x": 1190,
                "y": 87
            },
            {
                "x": 1188,
                "y": 45
            },
            {
                "x": 1188,
                "y": 12
            },
            {
                "x": 1215,
                "y": 5
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 134,
                "y": 496
            },
            {
                "x": 164,
                "y": 454
            },
            {
                "x": 222,
                "y": 421
            },
            {
                "x": 217,
                "y": 481
            },
            {
                "x": 166,
                "y": 517
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 1072,
                "y": 264
            },
            {
                "x": 1087,
                "y": 280
            },
            {
                "x": 1112,
                "y": 287
            },
            {
                "x": 1134,
                "y": 267
            },
            {
                "x": 1105,
                "y": 245
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 951,
                "y": 141
            },
            {
                "x": 930,
                "y": 82
            },
            {
                "x": 948,
                "y": 47
            },
            {
                "x": 996,
                "y": 13
            },
            {
                "x": 1056,
                "y": 3
            },
            {
                "x": 905,
                "y": 11
            }
        ],
        "fill": true
    },
    {
        "points": [
            {
                "x": 1255,
                "y": 7
            },
            {
                "x": 1265,
                "y": 8
            },
            {
                "x": 1265,
                "y": 17
            },
            {
                "x": 1256,
                "y": 17
            }
        ],
        "fill": true
    }
];