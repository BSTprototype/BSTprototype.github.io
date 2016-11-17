var quizzes = [
    {
        question: "Have you registered your business?",
        answers: [
            {
                answer: "Yes",
                explanation: ""
            },
            {
                answer: "No",
                explanation: "To register your business, please visit: <a href='https://www.ontario.ca/page/business-name-registration' target='_blank'>https://www.ontario.ca/page/business-name-registration</a>"
            }
        ],
        userAnswer: ""
    },
    {
        question: "Will your restaurant hire employees?",
        answers: [
            {
                answer: "Yes",
                explanation: "Your business may be required to register for a Business Number (BN). The BN is a nine-digit identifier for businesses to simplify their dealings with federal, provincial, and municipal governments in Canada. It aims to give each registered business its own unique number. For more information, please visit: <a href='http://www.cra-arc.gc.ca/tx/bsnss/tpcs/bn-ne/menu-eng.html' target='_blank'>http://www.cra-arc.gc.ca/tx/bsnss/tpcs/bn-ne/menu-eng.html</a>"
            },
            {
                answer: "No",
                explanation: ""
            },
            {
                answer: "Not sure",
                explanation: "Your business may be required to register for a Business Number (BN). The BN is a nine-digit identifier for businesses to simplify their dealings with federal, provincial, and municipal governments in Canada. It aims to give each registered business its own unique number. For more information, please visit: <a href='http://www.cra-arc.gc.ca/tx/bsnss/tpcs/bn-ne/menu-eng.html' target='_blank'>http://www.cra-arc.gc.ca/tx/bsnss/tpcs/bn-ne/menu-eng.html</a>"
            }
        ],
        userAnswer: ""
    },
    {
        question: "Will your employees be on a payroll?",
        answers: [
            {
                answer: "Yes",
                explanation: "You have to make deductions on amounts you pay if you are an employer, a trustee or a payer. After you have made the deductions, you have to remit these deductions, plus your share, to the CRA. For more information, please visit: <a href='http://www.cra-arc.gc.ca/tx/bsnss/tpcs/pyrll/hwpyrllwrks/menu-eng.html' target='_blank'>http://www.cra-arc.gc.ca/tx/bsnss/tpcs/pyrll/hwpyrllwrks/menu-eng.html</a>"
            },
            {
                answer: "No",
                explanation: ""
            }
        ],
        userAnswer: ""
    },
    {
        question: "Will you serve alcohol?",
        answers: [
            {
                answer: "Yes",
                explanation: "The Alcohol and Gaming Commission of Ontario (AGCO) is responsible for administering the Liquor Licence Act (LLA) that covers most aspects of Ontario's beverage alcohol laws. These laws provide the regulatory requirements for responsible sale and service of beverage alcohol in the province. For more information, please visit: <a href='http://www.agco.on.ca/en/whatwedo/notice_LSL_app.aspx' target='_blank'>http://www.agco.on.ca/en/whatwedo/notice_LSL_app.aspx</a>"
            },
            {
                answer: "No",
                explanation: ""
            }
        ],
        userAnswer: ""
    },
    {
        question: "Will your employees be handling food?",
        answers: [
            {
                answer: "Yes",
                explanation: "Toronto Public Health offers Food Handler Certification Courses to provide food handlers with the knowledge of safe food handling practices to prevent food-borne illness. For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=c3595ce6dfb31410VgnVCM10000071d60f89RCRD&vgnextchannel=fac2ebfc2bb31410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=c3595ce6dfb31410VgnVCM10000071d60f89RCRD&vgnextchannel=fac2ebfc2bb31410VgnVCM10000071d60f89RCRD</a>"
            },
            {
                answer: "No",
                explanation: ""
            },
            {
                answer: "Not sure",
                explanation: "Toronto Public Health offers Food Handler Certification Courses to provide food handlers with the knowledge of safe food handling practices to prevent food-borne illness. For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=c3595ce6dfb31410VgnVCM10000071d60f89RCRD&vgnextchannel=fac2ebfc2bb31410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=c3595ce6dfb31410VgnVCM10000071d60f89RCRD&vgnextchannel=fac2ebfc2bb31410VgnVCM10000071d60f89RCRD</a>"
            }
        ],
        userAnswer: ""
    },
    {
        question: "Do you require a building permit?",
        answers: [
            {
                answer: "Yes",
                explanation: "Under the Building Code Act, a building permit is required for the construction and/or demolition of a new building, an addition, or material alteration of any building or structure. For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=3422f716659c6410VgnVCM10000071d60f89RCRD&vgnextchannel=e7c14b1c296c0410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=3422f716659c6410VgnVCM10000071d60f89RCRD&vgnextchannel=e7c14b1c296c0410VgnVCM10000071d60f89RCRD</a>"
            },
            {
                answer: "No",
                explanation: ""
            },
            {
                answer: "Not sure",
                explanation: "Under the Building Code Act, a building permit is required for the construction and/or demolition of a new building, an addition, or material alteration of any building or structure. For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=3422f716659c6410VgnVCM10000071d60f89RCRD&vgnextchannel=e7c14b1c296c0410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=3422f716659c6410VgnVCM10000071d60f89RCRD&vgnextchannel=e7c14b1c296c0410VgnVCM10000071d60f89RCRD</a>"
            }
        ],
        userAnswer: ""
    },
    {
        question: "Are you zoned as a restaurant?",
        answers: [
            {
                answer: "Yes",
                explanation: ""
            },
            {
                answer: "No",
                explanation: "The Preliminary Zoning Review Programs assess whether a proposed project is in compliance with the City of Toronto's zoning bylaw(s) and assists in identifying other applicable laws that may required prior to the issuance of a building permit. For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=2f95fe29427e1410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=2f95fe29427e1410VgnVCM10000071d60f89RCRD</a>"
            },
            {
                answer: "Not sure",
                explanation: "The Preliminary Zoning Review Programs assess whether a proposed project is in compliance with the City of Toronto's zoning bylaw(s) and assists in identifying other applicable laws that may required prior to the issuance of a building permit. For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=2f95fe29427e1410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=2f95fe29427e1410VgnVCM10000071d60f89RCRD</a>"
            }
        ],
        userAnswer: ""
    },
    {
        question: "Will your restaurant have a patio?",
        answers: [
            {
                answer: "Yes",
                explanation: "In Toronto and East York, businesses can apply for a sidewalk cafe permit to allow them to have an outdoor patio where they can serve their menu. For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=6a6a8bee09724410VgnVCM10000071d60f89RCRD&vgnextchannel=b5336fd1f0724410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=6a6a8bee09724410VgnVCM10000071d60f89RCRD&vgnextchannel=b5336fd1f0724410VgnVCM10000071d60f89RCRD</a>"
            },
            {
                answer: "No",
                explanation: ""
            }
        ],
        userAnswer: ""
    },
    {
        question: "Will your patio be on a public or private property?",
        answers: [
            {
                answer: "Public",
                explanation: "Your business may be required to engage in public consultations with the City of Toronto. The consultation sessions incorporate stakeholder and public participation. This review includes in-depth research, analysis and consultations with sidewalk cafe permit holders, outdoor marketing display permit holders, members of the general public, residents/community groups, and relevant business associations.  For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=d2c8d59eca103410VgnVCM10000071d60f89RCRD&vgnextchannel=b5336fd1f0724410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=d2c8d59eca103410VgnVCM10000071d60f89RCRD&vgnextchannel=b5336fd1f0724410VgnVCM10000071d60f89RCRD</a>"
            },
            {
                answer: "Private",
                explanation: ""
            },
            {
                answer: "Not sure",
                explanation: "If your patio will be on public property, your business may be required to engage in public consultations with the City of Toronto. The consultation sessions incorporate stakeholder and public participation. This review includes in-depth research, analysis and consultations with sidewalk cafe permit holders, outdoor marketing display permit holders, members of the general public, residents/community groups, and relevant business associations.  For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=d2c8d59eca103410VgnVCM10000071d60f89RCRD&vgnextchannel=b5336fd1f0724410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=d2c8d59eca103410VgnVCM10000071d60f89RCRD&vgnextchannel=b5336fd1f0724410VgnVCM10000071d60f89RCRD</a>"
            }
        ],
        userAnswer: ""
    },
    {
        question: "Will your restaurant have a sign?",
        answers: [
            {
                answer: "Yes",
                explanation: "You will need a sign permit. For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=4ca90680bd550410VgnVCM10000071d60f89RCRD&vgnextchannel=75461ba53b450410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=4ca90680bd550410VgnVCM10000071d60f89RCRD&vgnextchannel=75461ba53b450410VgnVCM10000071d60f89RCRD</a>"
            },
            {
                answer: "No",
                explanation: ""
            },
            {
                answer: "Not sure",
                explanation: "You may need a sign permit. For more information, please visit: <a href='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=4ca90680bd550410VgnVCM10000071d60f89RCRD&vgnextchannel=75461ba53b450410VgnVCM10000071d60f89RCRD' target='_blank'>http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=4ca90680bd550410VgnVCM10000071d60f89RCRD&vgnextchannel=75461ba53b450410VgnVCM10000071d60f89RCRD</a>"
            }
        ],
        userAnswer: ""
    },
    {
        question: "Will you play music?",
        answers: [
            {
                answer: "Yes",
                explanation: "SOCAN licence gives you permission to use copyright-protected musical works from anywhere around the world. Through agreements with international performing rights organizations, SOCAN issues licences for all music used in public by businesses in Canada, no matter to which society the creators belong. For more information, please visit: <a href='http://www.socan.ca/node/51' target='_blank'>http://www.socan.ca/node/51</a>"
            },
            {
                answer: "No",
                explanation: ""
            },
            {
                answer: "Not sure",
                explanation: "SOCAN licence gives you permission to use copyright-protected musical works from anywhere around the world. Through agreements with international performing rights organizations, SOCAN issues licences for all music used in public by businesses in Canada, no matter to which society the creators belong. For more information, please visit: <a href='http://www.socan.ca/node/51' target='_blank'>http://www.socan.ca/node/51</a>"
            }
        ],
        userAnswer: ""
    }
]
