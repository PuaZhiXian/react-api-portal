'use client';
import Header from "@/components/header";
import {GuideQna} from "@/interface/guide-qna";
import React, {useRef} from "react";

export default function GuidePage() {

    const guideQnA: GuideQna[] = [
        {
            "id": 1,
            "guide_name": "Configuring SSL/TLS for secure communication",
            "answer": "Enable SSL/TLS certificates on your server to encrypt data transmitted over the network."
        },
        {
            "id": 2,
            "guide_name": "Setting up API keys",
            "answer": "Navigate to the developer portal, create a new project, and generate API keys."
        },
        {
            "id": 3,
            "guide_name": "Integration with Python",
            "answer": "To integrate the API with Python, use the requests library and follow the provided documentation."
        },
        {
            "id": 4,
            "guide_name": "Troubleshooting common installation issues",
            "answer": "Check for network connectivity, verify system requirements, and review error logs for hints."
        },
        {
            "id": 5,
            "guide_name": "Securing API endpoints",
            "answer": "Implement authentication methods such as API tokens or OAuth to secure endpoints."
        },
        {
            "id": 6,
            "guide_name": "Testing API endpoints",
            "answer": "Utilize tools like Postman or cURL to send requests and verify responses."
        },
        {
            "id": 7,
            "guide_name": "Configuring API rate limits",
            "answer": "Set rate limits per user or per endpoint to prevent abuse and ensure fair usage."
        },
        {
            "id": 8,
            "guide_name": "Upgrading to the latest API version",
            "answer": "Follow the versioning documentation and update your implementation accordingly."
        },
        {
            "id": 9,
            "guide_name": "Enabling CORS support",
            "answer": "Configure the API server to allow Cross-Origin Resource Sharing (CORS) requests."
        },
        {
            "id": 10,
            "guide_name": "Backing up API data",
            "answer": "Regularly back up your API data to prevent data loss in case of unexpected issues."
        },
        {
            "id": 11,
            "guide_name": "Scaling API infrastructure",
            "answer": "Consider load balancing and horizontal scaling to handle increased traffic."
        },
        {
            "id": 12,
            "guide_name": "Monitoring API performance",
            "answer": "Use monitoring tools to track response times, errors, and overall API health."
        },
        {
            "id": 13,
            "guide_name": "Implementing webhooks",
            "answer": "Set up webhooks to receive real-time notifications for specific events."
        },
        {
            "id": 14,
            "guide_name": "Handling versioning gracefully",
            "answer": "Use backward-compatible changes and communicate effectively about deprecations."
        },
        {
            "id": 15,
            "guide_name": "Optimizing API responses",
            "answer": "Minimize payload size, use caching strategies, and consider response pagination."
        }
    ]
    const contentRef = useRef<HTMLDivElement>(null);

    const handleScroll = (sectionId: string) => {
        const element = contentRef.current?.querySelector(`#${sectionId}`);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="h-screen">
            <div className="bg-primary-900">
                <Header currentActive={'guide'} isLogin={false}/>
            </div>
            <div className="container mx-auto xl:px-0 px-[10px] ">
                <div className="font-bold text-title py-[18px]">Guide</div>
                <div className="xl:grid grid-cols-7 hidden ">
                    <div className="col-span-2 border">
                        <div className="py-[18px] px-4 h-full">
                            <div className="font-bold text-subtitle">Quick Start Guide</div>
                            <div>
                                <ul>
                                    {
                                        guideQnA.map(value => {
                                            return (
                                                <li key={value.id} onClick={() => {
                                                    handleScroll('guide_' + value.id)
                                                }}
                                                    className="cursor-pointer text-label text-justify">
                                                    {value.guide_name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 border">
                        <div className="py-7 px-8" ref={contentRef}>
                            {
                                guideQnA.map(value => {
                                    return (
                                        <div key={'guide_' + value.id} id={'guide_' + value.id}>
                                            <div className="text-label font-bold mb-3.5">{value.guide_name}</div>
                                            <div className="text-xs mb-7 text-justify">{value.answer}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}