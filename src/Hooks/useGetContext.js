import { useContext } from "react"
import {Contexto} from "../context/Context"


export const useGetContext = () => {
    return useContext(Contexto)
}
