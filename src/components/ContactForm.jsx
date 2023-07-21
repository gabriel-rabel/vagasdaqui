export default function ContactForm(params) {


    return(

        <div className="border rouded shadow-md p-6 max-w-lg text-start">
            <form>
                <label>
                    Nome:
                </label>
                <input name="name" type="text"/>
                <label>
                    E-mail:
                </label>
                <input name="email" type="text"/>
                <label>
                    Telefone:
                </label>
                <input name="phone" type="text"/>
                <label>
                    Assunto:
                </label>
                <textarea name="subject" type="text"/>
                <button type="submit" className="bg-primary-button text-white">Enviar</button>

            </form>
        </div>
    )
    
};
