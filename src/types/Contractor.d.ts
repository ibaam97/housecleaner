import Id from "./Id"
import Service from "./Service"

type Contractor = {
    firstname: string;
    lastname: string;
    email: string;
    id?: Id;
    image?: string;
    service?:Service
    service_id?: Id
    phone?: string
} & Address

export default Contractor