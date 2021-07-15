import {useRouter} from "next/router"
import Link from 'next/link'

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"

const PaginationButtons = () => {

    const router = useRouter()

    const startIndex = Number(router.query.start) || 0;

    return (
        <div className = "flex max-w-lg justify-between text-blue-700 mb-10">
            {startIndex >=10 && (
                <Link href = {`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                
                    <div className = "flex flex-grow hover:underline flex-col items-center cursor-pointer">
                        <ChevronLeftIcon className = "h-5 " />
                        <p>previous</p>
                    </div>
                
                </Link>
            )}

            <Link href = {`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                <div className = "flex flex-grow hover:underline flex-col items-center cursor-pointer">

                    <ChevronRightIcon className = "h-5 "/>
                    <p>next</p>
                </div>

            </Link>
        </div>
    )
}

export default PaginationButtons
