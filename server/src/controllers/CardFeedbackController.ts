import { Request, Response } from 'express';
import { CardFeedback } from '@models/CardFeedback';
import { Citi, Crud } from 'src/global';

export default class CardFeedbackController implements Crud {
    async create (request: Request, response:Response){
        const {picture, name, company, text} = request.body;
    
        const isAnyUndefined = Citi.areValuesUndefined(picture, name, company, text);
        if(isAnyUndefined) return response.status(400).send();

        const newCardFeedback = {picture, name, company, text};
        const {httpStatus, message} = await Citi.insertIntoDatabase(CardFeedback, newCardFeedback)

        return response.status(httpStatus).send({message});
    }

    async get (request: Request, response: Response) {
        const {httpStatus, values} = await Citi.getAll(CardFeedback);
        return response.status(httpStatus).send(values);
    }

    async delete (request: Request, response: Response) {
        const {id} = request.params;
        const {value: cardFeedbackFound, message} = await Citi.findByID(CardFeedback, id);

        if(!cardFeedbackFound) return response.status(400).send({message});

        const {httpStatus, messageFromDelete} = await Citi.deleteValue(CardFeedback, cardFeedbackFound);
        
        return response.status(httpStatus).send({messageFromDelete});
    }

    async update(request: Request, response: Response) {
        const {id} = request.params;
        const {picture, name, company, text} = request.body;

        const isAnyUndefined = Citi.areValuesUndefined(id, picture, name, company, text);
        if(isAnyUndefined) return response.status(400).send();

        const CardFeedbackWithUpdateValues = {picture, name, company, text};

        const {httpStatus, messageFromUpdate} = await Citi.updateValue(CardFeedback, id, CardFeedbackWithUpdateValues);
        return response.status(httpStatus).send({messageFromUpdate});
    }
}