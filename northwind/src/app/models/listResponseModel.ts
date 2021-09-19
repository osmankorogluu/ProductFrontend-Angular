import { ResponsModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponsModel{ 
    data:T[];

}