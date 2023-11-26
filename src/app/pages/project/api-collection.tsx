import {Card, CardBody} from "@nextui-org/card";
import {IApi} from "@/interface/i-api";
import {useRouter} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";

export default function () {

    const router = useRouter()
    const apiCollection: IApi[] = [
        {
            "id": '3',
            "api_collection_name": "Balance",
            "description": "This is an object representing your Stripe balance. You can retrieve it to see the balance currently on your Stripe account. You can also retrieve the balance history, which contains a list of transactions that contributed to the balance (charges, payouts, and so forth). The available and pending amounts for each currency are broken down further by payment source types."
        },
        {
            "id": '4',
            "api_collection_name": "Balance transaction",
            "description": "Balance transactions represent funds moving through your Stripe account. Stripe creates them for every type of transaction that enters or leaves your Stripe account balance.",
        },
        {
            "id": '6',
            "api_collection_name": "Customers",
            "description": "This object represents a customer of your business. Use it to create recurring charges and track payments that belong to the same customer.",
        }
    ];

    const handleOpenNewTab = () => {
        router.replace('/pages/product', RedirectType.replace)
    }

    return (
        <div>
            <div className="font-bold text-[20px]">Api Collection</div>

            <div>
                {
                    apiCollection.map(api => {
                        return (
                            <Card key={api.id} className=" my-2.5">
                                <CardBody>
                                    <div className="text-[16px] mb-[18px]">{api.api_collection_name}</div>
                                    <div className="flex items-center">
                                        <div className="text-[14px] grow">
                                            {api.description}
                                        </div>
                                        <div>
                                            <span
                                                className="cursor-pointer material-symbols-outlined">open_in_new</span>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        )
                    })
                }

            </div>
        </div>
    );
}