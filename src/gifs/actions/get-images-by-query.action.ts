import axios from 'axios'

import type { robotsProps , ApiResponse } from '../interfaces/image.interface'

export const getImagesByQuery = async(query:string): Promise<robotsProps> => {
 
    const encodedName = encodeURIComponent(query).replace(/%20/g,'+')
    
    const response = await axios.get<robotsProps>(`https://repaso-node.onrender.com/name/${encodedName}`);
    
    console.log(response.data);
    return response.data
}