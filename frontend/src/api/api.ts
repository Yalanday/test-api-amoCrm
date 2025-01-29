import axios from "axios";

export const makeRequest = async (selectedValue: string) => {
    const response = await axios.post('http://localhost:5000/amocrm', {
        content: selectedValue
    }, {
        headers: {
            "Content-Type": 'application/json'
        }
    });

    return response.data._embedded[selectedValue];
}


