
export interface IService{

    name:string,
    icon:File,

}


export interface ISubService {

    serviceId:string
    name:string
    
}


export interface IBrand {
    name:string
    subserviceId:string
    image:File,
    description:string

}
