import { Request, Response } from 'express';
import { Product } from '@models/Product';
import { Citi, Crud } from '../global'

export default class ProductController implements Crud {

    async create(request: Request, response: Response){
        const {title, subtitle, link} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, subtitle, link);
        if(isAnyUndefined) return response.status(400).send();

        const newProduct = { title, subtitle, link };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Product, newProduct);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Product);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: ProductFound, message } = await Citi.findByID(Product, id); 
           
        if(!ProductFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Product, ProductFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const {title, subtitle, link } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, subtitle, link, id);
        if(isAnyUndefined) return response.status(400).send();

        const ProductWithUpdatedValues = { title, subtitle, link };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Product, id, ProductWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}