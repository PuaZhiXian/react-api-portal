import Header from "@/components/header";
import {Divider} from "@nextui-org/react";
import {IApiCategory} from "@/interface/i-api-category";
import {ISelect} from "@/interface/i-select";
import {IApiDocumentationObject} from "@/interface/i-api-documentation-object";
import {IHttpStatusCodeSummary} from "@/interface/i-http-status-code-summary";

export default function ProductPage() {

    const general: string[] = ["Introduction", "Authentication", "Errors"]
    const documentation: IApiCategory[] = [{
        id: 1,
        category_name: "CORE RESOURCE",
        api_collections: [
            {
                id: 3,
                api_collection_name: "Balance",
                description: "This is an object representing your Stripe balance. You can retrieve it to see the balance currently on your Stripe account. You can also retrieve the balance history, which contains a list of transactions that contributed to the balance (charges, payouts, and so forth). The available and pending amounts for each currency are broken down further by payment source types.",
                object_id: {
                    "id": 1,
                    "object": "{\n  \"object\": \"balance\",\n  \"available\": [\n    {\n      \"amount\": 2217713,\n      \"currency\": \"cad\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 2217713\n      }\n    },\n    {\n      \"amount\": 2685,\n      \"currency\": \"nok\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 2685\n      }\n    },\n    {\n      \"amount\": 7254790,\n      \"currency\": \"gbp\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 7254790\n      }\n    },\n    {\n      \"amount\": 218420,\n      \"currency\": \"nzd\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 218420\n      }\n    },\n    {\n      \"amount\": 779902,\n      \"currency\": \"czk\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 779902\n      }\n    },\n    {\n      \"amount\": -1854,\n      \"currency\": \"aud\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": -1854\n      }\n    },\n    {\n      \"amount\": 665766500343,\n      \"currency\": \"usd\",\n      \"source_types\": {\n        \"bank_account\": 369172412,\n        \"card\": 665395775805\n      }\n    },\n    {\n      \"amount\": -76455,\n      \"currency\": \"eur\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": -76455\n      }\n    },\n    {\n      \"amount\": -40320,\n      \"currency\": \"jpy\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": -40320\n      }\n    },\n    {\n      \"amount\": 12000,\n      \"currency\": \"brl\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 12000\n      }\n    },\n    {\n      \"amount\": -412,\n      \"currency\": \"sek\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": -412\n      }\n    }\n  ],\n  \"connect_reserved\": [\n    {\n      \"amount\": 0,\n      \"currency\": \"cad\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"nok\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"gbp\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"nzd\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"czk\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"aud\"\n    },\n    {\n      \"amount\": 83080,\n      \"currency\": \"usd\"\n    },\n    {\n      \"amount\": 54584,\n      \"currency\": \"eur\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"jpy\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"brl\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"sek\"\n    }\n  ],\n  \"livemode\": false,\n  \"pending\": [\n    {\n      \"amount\": 0,\n      \"currency\": \"cad\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"nok\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"gbp\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"nzd\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"czk\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"aud\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 399508694,\n      \"currency\": \"usd\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 399508694\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"eur\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"jpy\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"brl\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"sek\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    }\n  ]\n}",
                    attr_ids: [
                        {
                            "attr_name": "available",
                            "attr_type": "array of hashes",
                            "attr_description": "Available funds that you can transfer or pay out automatically by Stripe or explicitly through the Transfers API or Payouts API. You can find the available balance for each currency and payment type in the source_types property.",
                            child_attr_ids: [
                                {
                                    "attr_name": "available.amount",
                                    "attr_type": "integer",
                                    "attr_description": "Balance amount."
                                },
                                {
                                    "attr_name": "available.source_types",
                                    "attr_type": "hash",
                                    "attr_description": "Breakdown of balance by source types.",
                                    "child_attr_ids": [
                                        {
                                            "attr_name": "available.source_types.bank_account",
                                            "attr_type": "integer",
                                            "attr_description": "Amount for bank account."
                                        },
                                        {
                                            "attr_name": "available.source_types.card",
                                            "attr_type": "integer",
                                            "attr_description": "Amount for card."
                                        },
                                        {
                                            "attr_name": "available.source_types.fpx",
                                            "attr_type": "integer",
                                            "attr_description": "Amount for FPX."
                                        }
                                    ]
                                },
                                {
                                    "attr_name": "available.currency",
                                    "attr_type": "currency",
                                    "attr_description": "Three-letter ISO currency code, in lowercase. Must be a supported currency."
                                }
                            ]
                        }
                    ]
                },
                api_ids: [
                    {
                        "id": 3,
                        "api_name": "Retrieve balance",
                        "api_description": "Retrieves 1 the current account balance, based on the authentication that was used to make the request. For a sample request, see Accounting for negative balances.",
                        "api_return": "Returns a balance object for the account that was authenticated in the request.",
                        "api_method": "GET",
                        "api_endpoint": " /v1/balance",
                        "api_response_json": "{\n  \"object\": \"balance\",\n  \"available\": [\n    {\n      \"amount\": 2217713,\n      \"currency\": \"cad\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 2217713\n      }\n    },\n    {\n      \"amount\": 2685,\n      \"currency\": \"nok\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 2685\n      }\n    },\n    {\n      \"amount\": 7254790,\n      \"currency\": \"gbp\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 7254790\n      }\n    },\n    {\n      \"amount\": 218420,\n      \"currency\": \"nzd\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 218420\n      }\n    },\n    {\n      \"amount\": 779902,\n      \"currency\": \"czk\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 779902\n      }\n    },\n    {\n      \"amount\": -1854,\n      \"currency\": \"aud\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": -1854\n      }\n    },\n    {\n      \"amount\": 665766500343,\n      \"currency\": \"usd\",\n      \"source_types\": {\n        \"bank_account\": 369172412,\n        \"card\": 665395775805\n      }\n    },\n    {\n      \"amount\": -76455,\n      \"currency\": \"eur\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": -76455\n      }\n    },\n    {\n      \"amount\": -40320,\n      \"currency\": \"jpy\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": -40320\n      }\n    },\n    {\n      \"amount\": 12000,\n      \"currency\": \"brl\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 12000\n      }\n    },\n    {\n      \"amount\": -412,\n      \"currency\": \"sek\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": -412\n      }\n    }\n  ],\n  \"connect_reserved\": [\n    {\n      \"amount\": 0,\n      \"currency\": \"cad\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"nok\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"gbp\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"nzd\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"czk\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"aud\"\n    },\n    {\n      \"amount\": 83080,\n      \"currency\": \"usd\"\n    },\n    {\n      \"amount\": 54584,\n      \"currency\": \"eur\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"jpy\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"brl\"\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"sek\"\n    }\n  ],\n  \"livemode\": false,\n  \"pending\": [\n    {\n      \"amount\": 0,\n      \"currency\": \"cad\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"nok\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"gbp\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"nzd\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"czk\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"aud\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 399508694,\n      \"currency\": \"usd\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 399508694\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"eur\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"jpy\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"brl\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    },\n    {\n      \"amount\": 0,\n      \"currency\": \"sek\",\n      \"source_types\": {\n        \"bank_account\": 0,\n        \"card\": 0\n      }\n    }\n  ]\n}",
                        "api_param_ids": [
                            {
                                "attr_name": "retrieve balance 1",
                                "attr_type": "integer",
                                "attr_description": "retrieve balance"
                            },
                            {
                                "attr_name": "retrieve balance 2",
                                "attr_type": "integer",
                                "attr_description": "Retrieve balance"
                            }
                        ],
                        "api_req_code": "Stripe.apiKey = \"sk_test_4eC39HqLyjWDarjtT1zdp7dc\";\n\nBalance balance = Balance.retrieve();"
                    }
                ]
            }
        ]
    }];
    const programmingLanguageOptions: ISelect[] = [
        {
            label: 'string',
            value: 'string',
            option: 'string',
        }
    ];

    const errorObject: IApiDocumentationObject[] = [];
    const httpStatusCodeSummaries: IHttpStatusCodeSummary[] = [];
    const errorTypes: IHttpStatusCodeSummary[] = [];

    return (
        <div className="h-screen">
            <div className="bg-primary-900">
                <Header/>
            </div>
            <div className="grid grid-cols-5">
                <div className="col-span-1 sticky text-white top-0 xl:block hidden
                overflow-y-auto overflow-x-hidden h-screen p-[20px] bg-gray-600">
                    <ul>
                        {general.map(general => {
                            return (
                                <li key={general} className="flex items-center my-2">
                                    <span className="material-symbols-outlined">analytics</span>
                                    <span className="ml-[20px] text-side-header">{general}</span>
                                </li>
                            )
                        })}
                        <Divider className="my-4"/>
                        {
                            documentation.map(docs => {
                                return (
                                    <div key={docs.id}>
                                        <div className="whitespace-normal leading-none w-[120px]
                                            pl-[10px] text-side-sub font-semibold">{docs.category_name}</div>
                                        <ul>
                                            {
                                                docs.api_collections.map(subdocs => {
                                                    return (
                                                        <li key={subdocs.id}
                                                            className="pl-[20px] my-[10px] cursor-pointer ">
                                                            <div
                                                                className="whitespace-normal leading-none w-[120px] text-side-sub font-medium">
                                                                {subdocs.api_collection_name}
                                                            </div>
                                                            <ul>
                                                                <li className="text-side-sub font-medium pl-[30px] my-[10px] cursor-pointer ">
                                                                    <p className="text-side-sub font-medium whitespace-normal leading-[15px] w-full">
                                                                        The {subdocs.api_collection_name} objects</p>
                                                                </li>

                                                                {
                                                                    subdocs.api_ids.map(anchor => {
                                                                        return (
                                                                            <li key={anchor.id}
                                                                                className="pl-[30px] my-[10px] cursor-pointer ">
                                                                                <p className="text-side-sub font-medium whitespace-normal leading-[15px] w-full">{anchor.api_name}</p>
                                                                            </li>
                                                                        )
                                                                    })
                                                                }
                                                            </ul>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className=" col-span-4">
                    <section className="p-[68px] border-b">
                        {/* <!--Authentication-->*/}
                        <div className="text-doc-title font-medium">API Reference</div>
                        <div className="lg:grid grid-cols-5 mt-[20px]">
                            <div className="col-span-3 lg:mr-[68px]">
                                <div className="text-doc-text mb-[24px] text-justify">
                                    The Stripe API is organized around REST. Our API has predictable resource-oriented
                                    URLs, accepts
                                    form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP
                                    response codes,
                                    authentication, and verbs.
                                </div>
                                <div className="text-doc-text text-justify mt-[20px]">
                                    You can use the Stripe API in test mode, which doesn't affect your live data or
                                    interact with the
                                    banking
                                    networks. The API key you use to authenticate the request determines whether the
                                    request is live mode
                                    or
                                    test mode.
                                </div>
                                <div className="text-doc-text text-justify mt-[20px]">
                                    The Stripe API doesn't support bulk updates. You can work on only one object per
                                    request.
                                </div>
                                <div className="text-doc-text text-justify mt-[20px]">
                                    The Stripe API differs for every account as we release new versions and tailor
                                    functionality. Log in
                                    to
                                    see docs customized to your version of the API, with your test key and data.
                                </div>
                            </div>
                            <div className="mt-[10px] lg:mt-0 col-span-2">
                                <div className="mb-[24px]">
                                    <div className="text-label font-semibold">JUST GETTING STARTED?</div>
                                    <div className="mt-doc-text text-[16px] text-gray-500 text-justify">
                                        Check out our development quickstart guide.
                                    </div>
                                </div>
                                <div className="mb-[24px]">
                                    <div className="text-label font-semibold">NOT A DEVELOPER?</div>
                                    <div className="mt-[12px] text-doc-text text-gray-500 text-justify">
                                        Use Stripe’s no-code options or apps from our partners to get started with
                                        Stripe and to do more with your Stripe account—no code required.
                                    </div>
                                </div>
                                <div className="flex mb-[4px]">
                                    {
                                        programmingLanguageOptions.map(languageOptions => {
                                            return (
                                                <div className=" cursor-pointer w-[40px] py-[8px] mx-[8px]"
                                                     key={languageOptions.value}>
                                                    <div className="flex justify-center h-[24px]">
                                                        <img src={languageOptions.option} height="24" width="24"/>
                                                    </div>
                                                    <div className="mt-[8px] text-center
                                                            text-xs font-semibold">{languageOptions.label}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*// <!--Authentication-->*/}
                    <section className="p-[68px] border-b" id="Authentication">
                        <div className="text-doc-title font-medium">Authentication</div>

                        <div className="lg:grid grid-cols-5 mt-[20px]">
                            <div className="col-span-3 lg:mr-[68px]">
                                <div className="text-doc-text text-justify">
                                    The Stripe API uses API keys to authenticate requests. You can view and manage your
                                    API keys in the
                                    Stripe
                                    Dashboard.
                                </div>
                                <div className="text-doc-text text-justify mt-[20px]">
                                    Test mode secret keys have the prefix sk_test_ and live mode secret keys have the
                                    prefix sk_live_.
                                    Alternatively, you can use restricted API keys for granular permissions.
                                </div>
                                <div className="text-doc-text text-justify mt-[20px]">
                                    Your API keys carry many privileges, so be sure to keep them secure! Do not share
                                    your secret API keys
                                    in
                                    publicly accessible areas such as GitHub, client-side code, and so forth.
                                </div>
                                <div className="text-doc-text text-justify mt-[20px]">
                                    Use your API key by assigning it to Stripe.api_key. The Ruby library will then
                                    automatically send this
                                    key
                                    in each request.
                                </div>
                                <div className="text-doc-text text-justify mt-[20px]">
                                    You can also set a per-request key with an option. This is often useful for Connect
                                    applications that
                                    use
                                    multiple API keys during the lifetime of a process. Methods on the returned object
                                    reuse the same API
                                    key.
                                </div>
                                <div className="text-doc-text text-justify mt-[20px]">
                                    All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API
                                    requests without
                                    authentication will also fail.
                                </div>
                            </div>
                            <div className="mt-[10px] lg:mt-0  col-span-2">
                                Code Editor needed
                            </div>
                        </div>
                    </section>

                    {/*// <!--Errors-->*/}
                    <section className="p-[68px] border-b" id="Errors">
                        <div className="text-doc-title font-medium">Errors</div>
                        <div className="lg:grid grid-cols-5 mt-[20px]">
                            <div className="col-span-3 lg:mr-[68px]">
                                <div>
                                    <div className="text-doc-text text-justify">
                                        Stripe uses conventional HTTP response codes to indicate the success or failure
                                        of an API request.
                                        In
                                        general: Codes in the 2xx range indicate success. Codes in the 4xx range
                                        indicate an error that
                                        failed
                                        given
                                        the information provided (e.g., a required parameter was omitted, a charge
                                        failed, etc.). Codes in
                                        the
                                        5xx
                                        range indicate an error with Stripe's servers (these are rare).
                                    </div>
                                    <div className="text-doc-text text-justify mt-[20px]">
                                        Some 4xx errors that could be handled programmatically (e.g., a card is
                                        declined) include an error
                                        code
                                        that
                                        briefly explains the error reported.
                                    </div>
                                </div>
                                {
                                    errorObject.map(attribute => {
                                        return (
                                            <div className="py-[16px] border-t border-gray-300"
                                                 key={attribute.attr_name}>
                                                {/*// <!--name & variable type-->*/}
                                                <div className="flex items-center">
                                                    <div className="text-doc-text font-semibold
                                                    text-gray-700 mr-[4px]">{attribute.attr_name}</div>
                                                    <div className="text-xs font-semibold
                                                        text-gray-400 mr-[4px]">{attribute.attr_type}</div>
                                                </div>
                                                {/*// <!--description-->*/}
                                                <div className="text-doc-text
                                                 text-justify ">{attribute.attr_description}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="mt-[10px] lg:mt-0 col-span-2">
                                {/*// <!--HTTP STATUS CODE SUMMARY-->*/}
                                <div className="mb-[12px]">
                                    {/*// <!--Header-->*/}
                                    <div
                                        className="px-[12px] py-[10px] text-gray-500 text-xs font-medium bg-gray-100 border rounded-t"> HTTP
                                        STATUS CODE SUMMARY
                                    </div>
                                    {/*// <!--Content-->*/}
                                    <div
                                        className="flex flex-col gap-[9px] border rounded-b bg-gray-50 px-[15px] py-[16px]">
                                        {
                                            httpStatusCodeSummaries.map(errorCode => {
                                                return (
                                                    <div className="grid grid-cols-3 gap-[40px]" key={errorCode.code}>
                                                        <div
                                                            className="font-semibold text-xs text-gray-600 col-span-1 text-right">{errorCode.code}</div>
                                                        <div
                                                            className="font-semibold text-xs text-gray-600 col-span-2 text-justify">{errorCode.description}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {/*// <!--ERROR TYPES-->*/}
                                <div className="mb-[12px]">
                                    {/*// <!--Header-->*/}
                                    <div
                                        className="px-[12px] py-[10px] text-gray-500 text-xs font-medium bg-gray-100 border rounded-t">ERROR
                                        TYPES
                                    </div>
                                    {/*// <!--Content-->*/}
                                    <div
                                        className="flex flex-col gap-[9px] border rounded-b bg-gray-50 px-[15px] py-[16px]">
                                        {
                                            errorTypes.map(errorType => {
                                                return (
                                                    <div className="grid grid-cols-3 gap-[40px]" key={errorType.code}>
                                                        <div
                                                            className="font-semibold text-xs text-gray-600 col-span-1 text-right">{errorType.code}</div>
                                                        <div
                                                            className="font-semibold text-xs text-gray-600 col-span-2 text-justify">{errorType.description}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/*// <!--Specific API Component-->*/}
                    {
                        documentation.map(apiCategory => {
                            return (
                                <div key={apiCategory.id}>
                                    {
                                        apiCategory.api_collections.map(apiCollection => {
                                            return (
                                                <div key={apiCollection.id}>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}