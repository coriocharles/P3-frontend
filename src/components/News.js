import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function News() {

    const [newsData, setNewsData] = useState(null)
    let hardCodeNews = {
        "warnings": [
        "limit is higher than your plan allows"
        ],
        "meta": {
        "found": 973,
        "returned": 3,
        "limit": 3,
        "page": 1
        },
        "data": [
        {
        "uuid": "03c6bb21-07f3-446e-99a6-97dfe3fb7a1c",
        "title": "Microsoft Says Only 3% Of PlayStation Players Would Switch For Exclusive ‘Call Of Duty’",
        "description": "Microsoft has repeatedly said that it will not take Call of Duty exclusive to Xbox if it purchases Activision Blizzard. But now it’s saying that if it did, it wouldn’t be a big deal.",
        "keywords": "Microsoft, Xbox, PlayStation Players Would Switch For Exclusive, Call of Duty",
        "snippet": "Call of Duty Activision\n\nMicrosoft has repeatedly said that it will not take Call of Duty exclusive to Xbox if it purchases Activision Blizzard. But now it’s ...",
        "url": "https://www.forbes.com/sites/paultassi/2023/03/07/microsoft-says-only-3-of-playstation-players-would-switch-for-exclusive-call-of-duty/",
        "image_url": "https://imageio.forbes.com/specials-images/imageserve/609bc1565449bbb4e3afe7d2/0x0.jpg?format=jpg&width=1200",
        "language": "en",
        "published_at": "2023-03-07T14:07:30.000000Z",
        "source": "forbes.com",
        "relevance_score": null,
        "entities": [
        {
        "symbol": "SONY",
        "name": "Sony Group Corporation",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Technology",
        "match_score": 15.087132,
        "sentiment_score": -0.28595,
        "highlights": [
        {
        "highlight": "<em>Sony</em> recently announced that 32 million PS5s have been sold, so 3% of that would be 960,000 players.",
        "sentiment": 0,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Rumor has it the CMA is already convinced by Microsoft’s latest moves of offering contracts to Nintendo and NVIDIA (and <em>Sony</em>, which has rejected them), but the UK and the US’s FTC remain obstacles.",
        "sentiment": -0.5719,
        "highlighted_in": "main_text"
        }
        ]
        }
        ],
        "similar": []
        },
        {
        "uuid": "3ab93934-c8a3-480c-9262-0a5666a66c1e",
        "title": "Global Gaming Peripherals Market Expected to Garner $14,396.40 Million by 2030 and Grow at 9.9% CAGR in the 2022-2030 Timeframe [230-Pages] | Released by Research Dive",
        "description": "By 2030, the global gaming peripherals market is predicted to grow immensely, chiefly due to product advancements by leading market players. Also, product...",
        "keywords": "Research Dive, Gaming Peripherals Market, Headsets, Keyboard, Controller, PC and Gaming Console, Wired and Wireless, Online and Offline",
        "snippet": "New York, USA, March 07, 2023 (GLOBE NEWSWIRE) -- According to the newly published Research Dive report, the global gaming peripherals market is expected to gar...",
        "url": "https://www.globenewswire.com/news-release/2023/03/07/2622175/0/en/Global-Gaming-Peripherals-Market-Expected-to-Garner-14-396-40-Million-by-2030-and-Grow-at-9-9-CAGR-in-the-2022-2030-Timeframe-230-Pages-Released-by-Research-Dive.html",
        "image_url": "https://ml.globenewswire.com/Resource/Download/95a867ce-3780-4ace-8da5-32bead68c6b7?size=1",
        "language": "en",
        "published_at": "2023-03-07T14:05:00.000000Z",
        "source": "globenewswire.com",
        "relevance_score": null,
        "entities": [
        {
        "symbol": "PLT",
        "name": "Plantronics, Inc.",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Technology",
        "match_score": 19.852903,
        "sentiment_score": 0.5267,
        "highlights": [
        {
        "highlight": "Corsair\n\nZOWIE (BenQ)\n\n<em>Plantronics</em> <em>Inc</em>.\n\nSteelSeries\n\nThese players are introducing and coming up with new technological advancements and innovations to gain a primacy in the market.",
        "sentiment": 0.5267,
        "highlighted_in": "main_text"
        }
        ]
        }
        ],
        "similar": [
        {
        "uuid": "75b7809c-d021-4b77-aa43-e99fd1eaafce",
        "title": "North America Sports Medicine Market Predicted to Gather $5,382 Million by 2025, Growing at a CAGR of 6.7% in 2018-2025 Timeframe [100-Pages]",
        "description": "/PRNewswire/ -- Research Dive has added a new report to its offering titled, \"North America Sports Medicine Market by Product, Body Support and Recovery, Body...",
        "keywords": "Research Dive",
        "snippet": "The North America sports medicine market is expected to grow by 2025 due to the increasing incidence of sports-related injuries. The knee injury sub-segment is ...",
        "url": "https://www.prnewswire.com/news-releases/north-america-sports-medicine-market-predicted-to-gather-5-382-million-by-2025--growing-at-a-cagr-of-6-7-in-2018-2025-timeframe-100-pages--report-by-research-dive-301764308.html",
        "image_url": "https://mma.prnewswire.com/media/997523/Research_Dive_Logo.jpg?p=facebook",
        "language": "en",
        "published_at": "2023-03-07T11:30:00.000000Z",
        "source": "prnewswire.com",
        "relevance_score": null,
        "entities": [
        {
        "symbol": "S1YK34.SA",
        "name": "Stryker Corporation",
        "exchange": "BVMF",
        "exchange_long": "The B3 S.A. - Brasil, Bolsa, Balcão",
        "country": "br",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 16.067726,
        "sentiment_score": 0,
        "highlights": [
        {
        "highlight": "<em>Stryker</em> <em>Corporation</em>\n\nZimmer Biomet holdings. Inc.\n\nDJO Global Inc.\n\nJohnson & Johnson (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "DJNJ2.BA",
        "name": "Johnson & Johnson",
        "exchange": "BCBA",
        "exchange_long": "Buenos Aires Stock Exchange",
        "country": "ar",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 13.726841,
        "sentiment_score": 0.7096,
        "highlights": [
        {
        "highlight": "<em>Johnson</em> & <em>Johnson</em> (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.\n\nThese key market players are developing different business strategies like product development, merger and acquisitions, collaborations and partnerships to gain a commanding position in the market.",
        "sentiment": 0.7096,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "DJNJ3.BA",
        "name": "Johnson & Johnson",
        "exchange": "BCBA",
        "exchange_long": "Buenos Aires Stock Exchange",
        "country": "ar",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 13.726841,
        "sentiment_score": 0.7096,
        "highlights": [
        {
        "highlight": "<em>Johnson</em> & <em>Johnson</em> (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.\n\nThese key market players are developing different business strategies like product development, merger and acquisitions, collaborations and partnerships to gain a commanding position in the market.",
        "sentiment": 0.7096,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "ZBH",
        "name": "Zimmer Biomet Holdings, Inc.",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 32.30505,
        "sentiment_score": 0,
        "highlights": [
        {
        "highlight": "Stryker Corporation\n\n<em>Zimmer</em> <em>Biomet</em> <em>holdings</em>. <em>Inc</em>.\n\nDJO Global Inc.\n\nJohnson & Johnson (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "SYK",
        "name": "Stryker Corporation",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 16.066607,
        "sentiment_score": 0,
        "highlights": [
        {
        "highlight": "<em>Stryker</em> <em>Corporation</em>\n\nZimmer Biomet holdings. Inc.\n\nDJO Global Inc.\n\nJohnson & Johnson (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "CNMD",
        "name": "CONMED Corporation",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 18.851099,
        "sentiment_score": 0.3818,
        "highlights": [
        {
        "highlight": "Speak with an Analyst or Schedule a call to get more Industry Insights on the North America Sports Medicine Market\n\nSignificant Market Players\n\nThe significant market players in the North America sports medicine market are\n\nSmith & Nephew Plc\n\n<em>Conmed</em> <em>Corporation</em> (Linvatec Corporation)\n\nMueller Sports Medicine Inc.",
        "sentiment": 0.3818,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "SNN",
        "name": "Smith & Nephew plc",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 21.586924,
        "sentiment_score": 0.3818,
        "highlights": [
        {
        "highlight": "Speak with an Analyst or Schedule a call to get more Industry Insights on the North America Sports Medicine Market\n\nSignificant Market Players\n\nThe significant market players in the North America sports medicine market are\n\n<em>Smith</em> & <em>Nephew</em> <em>Plc</em>\n\nConmed Corporation (Linvatec Corporation)\n\nMueller Sports Medicine Inc.",
        "sentiment": 0.3818,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "JNJ",
        "name": "Johnson & Johnson",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 13.726881,
        "sentiment_score": 0.7096,
        "highlights": [
        {
        "highlight": "<em>Johnson</em> & <em>Johnson</em> (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.\n\nThese key market players are developing different business strategies like product development, merger and acquisitions, collaborations and partnerships to gain a commanding position in the market.",
        "sentiment": 0.7096,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "SNNUF",
        "name": "Smith & Nephew plc",
        "exchange": "OTC",
        "exchange_long": "Over-the-counter Markets",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 21.586939,
        "sentiment_score": 0.3818,
        "highlights": [
        {
        "highlight": "Speak with an Analyst or Schedule a call to get more Industry Insights on the North America Sports Medicine Market\n\nSignificant Market Players\n\nThe significant market players in the North America sports medicine market are\n\n<em>Smith</em> & <em>Nephew</em> <em>Plc</em>\n\nConmed Corporation (Linvatec Corporation)\n\nMueller Sports Medicine Inc.",
        "sentiment": 0.3818,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "ZIM.DE",
        "name": "Zimmer Biomet Holdings, Inc.",
        "exchange": "XETRA",
        "exchange_long": "Deutsche Börse Xetra",
        "country": "de",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 32.29149,
        "sentiment_score": 0,
        "highlights": [
        {
        "highlight": "Stryker Corporation\n\n<em>Zimmer</em> <em>Biomet</em> <em>holdings</em>. <em>Inc</em>.\n\nDJO Global Inc.\n\nJohnson & Johnson (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "SYK.DE",
        "name": "Stryker Corporation",
        "exchange": "XETRA",
        "exchange_long": "Deutsche Börse Xetra",
        "country": "de",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 16.064653,
        "sentiment_score": 0,
        "highlights": [
        {
        "highlight": "<em>Stryker</em> <em>Corporation</em>\n\nZimmer Biomet holdings. Inc.\n\nDJO Global Inc.\n\nJohnson & Johnson (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "SYK.MX",
        "name": "Stryker Corporation",
        "exchange": "BMV",
        "exchange_long": "Mexican Stock Exchange",
        "country": "mx",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 16.060461,
        "sentiment_score": 0,
        "highlights": [
        {
        "highlight": "<em>Stryker</em> <em>Corporation</em>\n\nZimmer Biomet holdings. Inc.\n\nDJO Global Inc.\n\nJohnson & Johnson (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "ZBH.MX",
        "name": "Zimmer Biomet Holdings, Inc.",
        "exchange": "BMV",
        "exchange_long": "Mexican Stock Exchange",
        "country": "mx",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 32.298435,
        "sentiment_score": 0,
        "highlights": [
        {
        "highlight": "Stryker Corporation\n\n<em>Zimmer</em> <em>Biomet</em> <em>holdings</em>. <em>Inc</em>.\n\nDJO Global Inc.\n\nJohnson & Johnson (Depuy Synthes)\n\nBreg Inc.\n\nWright Medical Group N.V.\n\nArthrex Inc.",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "SN.L",
        "name": "Smith & Nephew plc",
        "exchange": "LSE",
        "exchange_long": "London Stock Exchange",
        "country": "gb",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 21.585651,
        "sentiment_score": 0.3818,
        "highlights": [
        {
        "highlight": "Speak with an Analyst or Schedule a call to get more Industry Insights on the North America Sports Medicine Market\n\nSignificant Market Players\n\nThe significant market players in the North America sports medicine market are\n\n<em>Smith</em> & <em>Nephew</em> <em>Plc</em>\n\nConmed Corporation (Linvatec Corporation)\n\nMueller Sports Medicine Inc.",
        "sentiment": 0.3818,
        "highlighted_in": "main_text"
        }
        ]
        }
        ]
        },
        {
        "uuid": "d0f114cf-1554-4038-807a-e9a07300d1f2",
        "title": "Global Pneumonia Therapeutics Market Size to Grow USD 4.10 Billion by 2030 | CAGR 8.9%: Spherical Insights",
        "description": "According to a research report published by SphericalInsights, the Global Pneumonia Therapeutics Market Size was valued at USD 2.60 billion in 2021 and...",
        "keywords": "SPHERICAL INSIGHTS LLP, Pneumonia Therapeutics Market, Pneumonia Therapeutics, alveoli, Vaccines segment, Prevention Vaccines, Pharmaceutical Stores, USA",
        "snippet": "New York, United States, March 07, 2023 (GLOBE NEWSWIRE) -- Global Pneumonia Therapeutics Market worth $4.10 billion by 2030\n\nAccording to a research report pub...",
        "url": "https://www.globenewswire.com/news-release/2023/03/07/2621770/0/en/Global-Pneumonia-Therapeutics-Market-Size-to-Grow-USD-4-10-Billion-by-2030-CAGR-8-9-Spherical-Insights.html",
        "image_url": "https://ml.globenewswire.com/Resource/Download/b27a94e8-407e-46ae-a5c2-47bb2a1c8a2e?size=1",
        "language": "en",
        "published_at": "2023-03-07T10:00:00.000000Z",
        "source": "globenewswire.com",
        "relevance_score": null,
        "entities": [
        {
        "symbol": "PFE.MX",
        "name": "Pfizer Inc.",
        "exchange": "BMV",
        "exchange_long": "Mexican Stock Exchange",
        "country": "mx",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 12.752844,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., <em>Pfizer</em> <em>Inc</em>., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "<em>Pfizer</em> <em>Inc</em>.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "MRK.MX",
        "name": "Merck & Co., Inc.",
        "exchange": "BMV",
        "exchange_long": "Mexican Stock Exchange",
        "country": "mx",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.575607,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Aurobindo Pharma, Lupin, <em>Merck</em> & <em>Co</em>., <em>Inc</em>., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Aurobindo Pharma\n\nLupin\n\n<em>Merck</em> & <em>Co</em>., <em>Inc</em>.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "NVSN.MX",
        "name": "Novartis AG",
        "exchange": "BMV",
        "exchange_long": "Mexican Stock Exchange",
        "country": "mx",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.377445,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Sanofi, <em>Novartis</em> <em>AG</em>, Sun Pharmaceutical Industries Ltd., Aurobindo Pharma, Lupin, Merck & Co., Inc., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Sanofi\n\n<em>Novartis</em> <em>AG</em>\n\nSun Pharmaceutical Industries Ltd.\n\nAurobindo Pharma\n\nLupin\n\nMerck & Co., Inc.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "HIK.L",
        "name": "Hikma Pharmaceuticals PLC",
        "exchange": "LSE",
        "exchange_long": "London Stock Exchange",
        "country": "gb",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 32.42029,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., GSK plc, <em>Hikma</em> <em>Pharmaceuticals</em> <em>PLC</em>, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "GSK plc\n\n<em>Hikma</em> <em>Pharmaceuticals</em> <em>PLC</em>\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "MYL",
        "name": "Mylan N.V.",
        "exchange": "NASDAQ",
        "exchange_long": "NASDAQ Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 22.731693,
        "sentiment_score": 0,
        "highlights": [
        {
        "highlight": "., <em>Mylan</em> <em>N.V</em>., Teva Pharmaceutical Industries Ltd., Sanofi, Novartis AG, Sun Pharmaceutical Industries Ltd., Aurobindo Pharma, Lupin, Merck & Co., Inc., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America",
        "sentiment": 0,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "<em>Mylan</em> <em>N.V</em>.\n\nTeva Pharmaceutical Industries Ltd.\n\nSanofi\n\nNovartis AG\n\nSun Pharmaceutical Industries Ltd.\n\nAurobindo Pharma\n\nLupin\n\nMerck & Co., Inc.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "NVS",
        "name": "Novartis AG",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.377064,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Sanofi, <em>Novartis</em> <em>AG</em>, Sun Pharmaceutical Industries Ltd., Aurobindo Pharma, Lupin, Merck & Co., Inc., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Sanofi\n\n<em>Novartis</em> <em>AG</em>\n\nSun Pharmaceutical Industries Ltd.\n\nAurobindo Pharma\n\nLupin\n\nMerck & Co., Inc.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "MRK",
        "name": "Merck & Co., Inc.",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.574986,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Aurobindo Pharma, Lupin, <em>Merck</em> & <em>Co</em>., <em>Inc</em>., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Aurobindo Pharma\n\nLupin\n\n<em>Merck</em> & <em>Co</em>., <em>Inc</em>.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "PFE",
        "name": "Pfizer Inc.",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 12.752895,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., <em>Pfizer</em> <em>Inc</em>., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "<em>Pfizer</em> <em>Inc</em>.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "PFE-WI",
        "name": "Pfizer, Inc.",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "N/A",
        "match_score": 12.752895,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., <em>Pfizer</em> <em>Inc</em>., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "<em>Pfizer</em> <em>Inc</em>.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "0K9E.L",
        "name": "Novartis AG",
        "exchange": "LSE",
        "exchange_long": "London Stock Exchange",
        "country": "gb",
        "type": "equity",
        "industry": "N/A",
        "match_score": 17.37671,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Sanofi, <em>Novartis</em> <em>AG</em>, Sun Pharmaceutical Industries Ltd., Aurobindo Pharma, Lupin, Merck & Co., Inc., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Sanofi\n\n<em>Novartis</em> <em>AG</em>\n\nSun Pharmaceutical Industries Ltd.\n\nAurobindo Pharma\n\nLupin\n\nMerck & Co., Inc.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "NVSEF",
        "name": "Novartis AG",
        "exchange": "OTC",
        "exchange_long": "Over-the-counter Markets",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.37658,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Sanofi, <em>Novartis</em> <em>AG</em>, Sun Pharmaceutical Industries Ltd., Aurobindo Pharma, Lupin, Merck & Co., Inc., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Sanofi\n\n<em>Novartis</em> <em>AG</em>\n\nSun Pharmaceutical Industries Ltd.\n\nAurobindo Pharma\n\nLupin\n\nMerck & Co., Inc.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "HKMPY",
        "name": "Hikma Pharmaceuticals PLC",
        "exchange": "OTC",
        "exchange_long": "Over-the-counter Markets",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 32.407204,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., GSK plc, <em>Hikma</em> <em>Pharmaceuticals</em> <em>PLC</em>, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "GSK plc\n\n<em>Hikma</em> <em>Pharmaceuticals</em> <em>PLC</em>\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "HKMPF",
        "name": "Hikma Pharmaceuticals PLC",
        "exchange": "OTC",
        "exchange_long": "Over-the-counter Markets",
        "country": "us",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 32.401157,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., GSK plc, <em>Hikma</em> <em>Pharmaceuticals</em> <em>PLC</em>, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "GSK plc\n\n<em>Hikma</em> <em>Pharmaceuticals</em> <em>PLC</em>\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "PFE.ST",
        "name": "Pfizer Inc.",
        "exchange": "OMXS",
        "exchange_long": "Nasdaq Stockholm",
        "country": "se",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 12.753305,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., <em>Pfizer</em> <em>Inc</em>., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "<em>Pfizer</em> <em>Inc</em>.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "NOVN.SW",
        "name": "Novartis AG",
        "exchange": "SWX",
        "exchange_long": "SIX Swiss Exchange",
        "country": "ch",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.37554,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Sanofi, <em>Novartis</em> <em>AG</em>, Sun Pharmaceutical Industries Ltd., Aurobindo Pharma, Lupin, Merck & Co., Inc., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Sanofi\n\n<em>Novartis</em> <em>AG</em>\n\nSun Pharmaceutical Industries Ltd.\n\nAurobindo Pharma\n\nLupin\n\nMerck & Co., Inc.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "N1VS34.SA",
        "name": "Novartis AG",
        "exchange": "BVMF",
        "exchange_long": "The B3 S.A. - Brasil, Bolsa, Balcão",
        "country": "br",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.37532,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Sanofi, <em>Novartis</em> <em>AG</em>, Sun Pharmaceutical Industries Ltd., Aurobindo Pharma, Lupin, Merck & Co., Inc., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Sanofi\n\n<em>Novartis</em> <em>AG</em>\n\nSun Pharmaceutical Industries Ltd.\n\nAurobindo Pharma\n\nLupin\n\nMerck & Co., Inc.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "SUNPHARMA-BL.NS",
        "name": "SUN PHARMACEUTICAL",
        "exchange": "NSE",
        "exchange_long": "National Stock Exchange of India",
        "country": "in",
        "type": "equity",
        "industry": "N/A",
        "match_score": 17.988024,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Sanofi, Novartis AG, <em>Sun</em> <em>Pharmaceutical</em> Industries Ltd., Aurobindo Pharma, Lupin, Merck & Co., Inc., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Sanofi\n\nNovartis AG\n\n<em>Sun</em> <em>Pharmaceutical</em> Industries Ltd.\n\nAurobindo Pharma\n\nLupin\n\nMerck & Co., Inc.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "PFED.BA",
        "name": "PFIZER INC",
        "exchange": "BCBA",
        "exchange_long": "Buenos Aires Stock Exchange",
        "country": "ar",
        "type": "equity",
        "industry": "N/A",
        "match_score": 12.753369,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., <em>Pfizer</em> <em>Inc</em>., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "<em>Pfizer</em> <em>Inc</em>.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "NVSD.BA",
        "name": "NOVARTIS AG",
        "exchange": "BCBA",
        "exchange_long": "Buenos Aires Stock Exchange",
        "country": "ar",
        "type": "equity",
        "industry": "N/A",
        "match_score": 17.377327,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Sanofi, <em>Novartis</em> <em>AG</em>, Sun Pharmaceutical Industries Ltd., Aurobindo Pharma, Lupin, Merck & Co., Inc., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Sanofi\n\n<em>Novartis</em> <em>AG</em>\n\nSun Pharmaceutical Industries Ltd.\n\nAurobindo Pharma\n\nLupin\n\nMerck & Co., Inc.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "MRKD.BA",
        "name": "MERCK & CO INC",
        "exchange": "BCBA",
        "exchange_long": "Buenos Aires Stock Exchange",
        "country": "ar",
        "type": "equity",
        "industry": "N/A",
        "match_score": 17.575583,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Aurobindo Pharma, Lupin, <em>Merck</em> & <em>Co</em>., <em>Inc</em>., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Aurobindo Pharma\n\nLupin\n\n<em>Merck</em> & <em>Co</em>., <em>Inc</em>.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "PFECL.SN",
        "name": "PFIZER INC",
        "exchange": "SSE",
        "exchange_long": "Santiago Stock Exchange",
        "country": "cl",
        "type": "equity",
        "industry": "N/A",
        "match_score": 12.753261,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., <em>Pfizer</em> <em>Inc</em>., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "<em>Pfizer</em> <em>Inc</em>.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "MRK.SN",
        "name": "Merck & Co., Inc.",
        "exchange": "SSE",
        "exchange_long": "Santiago Stock Exchange",
        "country": "cl",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.574963,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Aurobindo Pharma, Lupin, <em>Merck</em> & <em>Co</em>., <em>Inc</em>., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Aurobindo Pharma\n\nLupin\n\n<em>Merck</em> & <em>Co</em>., <em>Inc</em>.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "PFE.SN",
        "name": "Pfizer Inc.",
        "exchange": "SSE",
        "exchange_long": "Santiago Stock Exchange",
        "country": "cl",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 12.753261,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., <em>Pfizer</em> <em>Inc</em>., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "<em>Pfizer</em> <em>Inc</em>.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "PFE.DE",
        "name": "Pfizer Inc.",
        "exchange": "XETRA",
        "exchange_long": "Deutsche Börse Xetra",
        "country": "de",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 12.752867,
        "sentiment_score": -0.26335,
        "highlights": [
        {
        "highlight": "., <em>Pfizer</em> <em>Inc</em>., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.\n\nAmong all other regions, North America is dominating the market over the forecast period.",
        "sentiment": -0.5267,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "<em>Pfizer</em> <em>Inc</em>.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "6MK.DE",
        "name": "Merck & Co., Inc.",
        "exchange": "XETRA",
        "exchange_long": "Deutsche Börse Xetra",
        "country": "de",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.575043,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Aurobindo Pharma, Lupin, <em>Merck</em> & <em>Co</em>., <em>Inc</em>., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Aurobindo Pharma\n\nLupin\n\n<em>Merck</em> & <em>Co</em>., <em>Inc</em>.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        },
        {
        "symbol": "MRK.PA",
        "name": "Merck & Co., Inc.",
        "exchange": "EPA",
        "exchange_long": "Euronext Paris",
        "country": "fr",
        "type": "equity",
        "industry": "Healthcare",
        "match_score": 17.574774,
        "sentiment_score": -0.148,
        "highlights": [
        {
        "highlight": "., Aurobindo Pharma, Lupin, <em>Merck</em> & <em>Co</em>., <em>Inc</em>., Pfizer Inc., GSK plc, Hikma Pharmaceuticals PLC, Cipla Inc., Lupin\n\nBuy Now Full Report @ https://www.sphericalinsights.com/checkout/1539 Immediate Delivery Available of this Market Report\n\nNorth America is dominating the market over the forecast period.",
        "sentiment": -0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Aurobindo Pharma\n\nLupin\n\n<em>Merck</em> & <em>Co</em>., <em>Inc</em>.\n\nPfizer Inc.\n\nGSK plc\n\nHikma Pharmaceuticals PLC\n\nCipla Inc.\n\nLupin\n\nGet a Discount on Report at https://www.sphericalinsights.com/request-discount/1539\n\n\n\n\n\nHave a Look at the Related Research Report?",
        "sentiment": 0,
        "highlighted_in": "main_text"
        }
        ]
        }
        ]
        }
        ]
        },
        {
        "uuid": "0c7440b6-2502-4129-9659-2605d0ecc871",
        "title": "Kirby McInerney LLP Announces the Filing of a Securities Class Action on Behalf of Fidelity National Information Services, Inc. (FIS) Investors",
        "description": "NEW YORK, March  07, 2023  (GLOBE NEWSWIRE) -- The law firm of Kirby McInerney LLP announces that a class action lawsuit has been filed in the U.S....",
        "keywords": "Kirby McInerney LLP, Class Action Lawsuit, Securities Fraud, Legal, Investor, Class Action",
        "snippet": "NEW YORK, March 07, 2023 (GLOBE NEWSWIRE) -- The law firm of Kirby McInerney LLP announces that a class action lawsuit has been filed in the U.S. District Court...",
        "url": "https://www.globenewswire.com/news-release/2023/03/07/2622176/937/en/Kirby-McInerney-LLP-Announces-the-Filing-of-a-Securities-Class-Action-on-Behalf-of-Fidelity-National-Information-Services-Inc-FIS-Investors.html",
        "image_url": "https://ml.globenewswire.com/Resource/Download/192da1d1-643f-4eee-b850-dde5b9f2b00f?size=1",
        "language": "en",
        "published_at": "2023-03-07T14:05:00.000000Z",
        "source": "globenewswire.com",
        "relevance_score": null,
        "entities": [
        {
        "symbol": "FIS",
        "name": "Fidelity National Information Services, Inc.",
        "exchange": "NYSE",
        "exchange_long": "New York Stock Exchange",
        "country": "us",
        "type": "equity",
        "industry": "Technology",
        "match_score": 170.12228,
        "sentiment_score": 0.296,
        "highlights": [
        {
        "highlight": "District Court for the Middle District of Florida on behalf of those who acquired <em>Fidelity</em> <em>National</em> <em>Information</em> <em>Services</em>, <em>Inc</em>. (“Fidelity National” or the “Company”) (<em>NYSE</em>: <em>FIS</em>) securities during the period from February 9, 2021 through February 10, 2023 (the “Class Period”).",
        "sentiment": 0.296,
        "highlighted_in": "main_text"
        },
        {
        "highlight": "Kirby McInerney LLP Announces the Filing of a Securities Class Action on Behalf of <em>Fidelity</em> <em>National</em> <em>Information</em> <em>Services</em>, <em>Inc</em>. (FIS) Investors",
        "sentiment": 0.296,
        "highlighted_in": "title"
        }
        ]
        }
        ],
        "similar": []
        }
        ]
        }

    // useEffect(()=>{
    //     fetch(
    //         `https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&limit=10&published_after=2023-03-06T14:44&api_token=36PQEqiPTidPV5uxhLInxBVnfVCCCFM8nOf6DyYQ`
    //     )
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data)
    //         setNewsData(data)
    //     })
    //     console.log({newsData})
    // }, [])

  return (
    <div className='news'>
        {/* <Card style={{width: '25vw'}}>
            <Card.Title>{newsData.data[0].title}</Card.Title>
            <Card.Body>
                <Card.Img src={newsData.data[0].image_url}/>
                <Card.Text>{newsData.data[0].snippet}</Card.Text>
                <Button href={newsData.data[0].url} variant='secondary'></Button>
            </Card.Body>
        </Card> */}
        <Card className='newsCard'>
            <Card.Body>
                <p style={{fontSize: 'small'}}>{hardCodeNews.data[0].source}</p>
                <Card.Img src={hardCodeNews.data[0].image_url} />
                <Card.Title>{hardCodeNews.data[0].title}</Card.Title>
                <Card.Text>
                    {hardCodeNews.data[0].snippet}
                </Card.Text>
                <Button href={hardCodeNews.data[0].url} variant="secondary">Read More</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default News