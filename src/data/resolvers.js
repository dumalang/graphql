import {
    Contact
} from './dbConnectors';

export const resolvers = {
    Query: {
        getContacts: () => {
            return Contact.find();
        },
        getOneContact: (root, {id}) => {
            return new Promise((resolve, object) => {
                Contact.findById(id, (err, contact) => {
                    if (err) reject(err)
                    else resolve(contact)
                })
            })
        }
    },
    Mutation: {
        createContact: (root, {input}) => {
            const newContact = new Contacts({
                firstName: input.firstName,
                lastName: input.lastName,
                email: input.email,
                company: input.company,
            });

            newContact.id = newContact._id;

            return new Promise((resolve, object) => {
                newContact.save((err) => {
                    if (err) reject(err)
                    else resolve(newContact)
                })
            })
        },
        updateContact: (root, {input}) => {
            return new Promise((resolve, object) => {
                Contact.findOneAndUpdate({_id: input.id}, input, {new: true}, (err, contact) => {
                    if (err) reject(err)
                    else resolve(contact)
                })
            })
        },
        deleteContact: (root, {id}) => {
            return new Promise((resolve, object) => {
                Contact.remove({_id: id}, (err) => {
                    if (err) reject(err)
                    else resolve('Successfully deleted contact!')
                })
            })
        }
    }
}
