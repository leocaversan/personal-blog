import axios from "axios";

const port =  4000;

export const realizePrediction = async (comment: string) => {
    try {
        const response = await axios.request({
            method: 'POST',
            url: `http://localhost:${port}/api/predict`,
            data: {
                "comment": comment,
            }
        })
        if (response.status === 200) {
            return response.data;
        } else {
            return null;
        }
        } catch (error) {
        console.error(error)
    }

}
export const getAcuracy = async () => {
    try {
        const response = await axios.request({
            method: 'GET',
            url: `http://localhost:${port}/api/`,
        })
        if (response.status === 200) {
            return response.data;
        }else{
            return null;
        }
    } catch(error) {
        console.error(error)
    }
}
