
import { Request, Response } from 'express';
import { Citi, Crud } from '../global'
import { Support } from '@models/Apoio';

export default class ApoioController implements Crud {

    async create(request: Request, response: Response){
        const {img} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(img);
        if(isAnyUndefined) return response.status(400).send();

        const newUser = { img };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Support, newUser);

        return response.status(httpStatus).send({ message });
    }

    async get(request: Request, response: Response){
        const {httpStatus, values} = await Citi.getAll(Support);
        return response.status(httpStatus).send(values);
    }

    async delete(request: Request, response: Response){
        const { id } = request.params;
        const {value: userFound, message } = await Citi.findByID(Support, id); 
           
        if(!userFound) return response.status(400).send({ message });

        const {httpStatus, messageFromDelete } = await Citi.deleteValue(Support, userFound);
        return response.status(httpStatus).send({ messageFromDelete });
    }

    async update(request: Request, response: Response){
        const { id } = request.params;
        const { img } = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(img, id);
        if(isAnyUndefined) return response.status(400).send();

        const userWithUpdatedValues = { img };

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Support, id, userWithUpdatedValues);
        return response.status(httpStatus).send({ messageFromUpdate });
    }

    
}