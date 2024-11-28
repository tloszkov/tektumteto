import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Email küldéshez

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        type: '',
        city: '',
        message: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            type: event.target.value,
        });
    };

    const [, setIsLoading] = React.useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Kérjük, tölts ki minden mezőt!');
            return;
        }

        setIsLoading(true); // Show loading indicator

        // Email küldés (módosítsd a serviceID, templateId és userId értékeket)
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, event.target as HTMLFormElement, import.meta.env.VITE_EMAILJS_USER_ID)
            .then((result: { text: string }) => {
                console.log(result.text);
                alert('Üzeneted sikeresen elküldve!');
                setFormData({ name: '', email: '', subject: '',type: '', city:'', message: '' });
            }, (error:Error) => {
                console.log(error.message);
                alert('Hiba történt az üzenet küldésekor.');
            })
            .finally(() => {
                setIsLoading(false); // Hide loading indicator
            });

        // Form törlése
        setFormData({
            name: '',
            email: '',
            subject: '',
            type:'',
            city:'',
            message: '',
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6">Kapcsolatfelvétel</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2">
                    Név
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-bold mb-2">
                    Tárgy
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold mb-2">
                    Szolgáltatás
                </label>
                <select
                    id="message"
                    name="message"
                    value={formData.type}
                    onChange={handleSelectChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    required
                >
                    <option value="">Válasszon szolgáltatást</option>
                    <option value="Tetőfedés">Tetőfedés</option>
                    <option value="Tetőfelújítás">Tetőfelújítás</option>
                    <option value="Tetőjavítás">Tetőjavítás</option>
                    <option value="Bádogos munkák">Bádogos munkák</option>
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-bold mb-2">
                    Város
                </label>
                <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold mb-2">
                    Üzenet
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-20 "
                    required
                ></textarea>
            </div>


            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="bg-blue-900 hover:bg-blue-700/80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Üzenet küldése
                </button>
            </div>
        </form>
    );
}

export default ContactForm;