
function Price({ timeLeft, formated_regular_price, formated_pay_price, regular_price, pay_price, sku }) {
    function getOffPercent() {
        // let reqular = Number(
        //     formated_regular_price.replace(/\$/g, '').replace(/,/g, ''),
        // )
        // let pay = Number(
        //     formated_pay_price.replace(/\$/g, '').replace(/,/g, ''),
        // )
        // let def = reqular - pay
        // let percent = (100 * def) / reqular

        const tremaind = regular_price - pay_price;
        const offer = tremaind / regular_price

        let percent = offer * 100

        return percent.toFixed(0) + '% off'
    }
    return (
        <>
            <div className="flex flex-row w-full justify-between items-center">
                <span className="font-bold text-4xl text-gray-900">
                    {formated_pay_price.split('.')[0]}
                    <sup className="font-bold text-2xl">
                        {formated_pay_price.split('.')[1]}
                    </sup>

                    {formated_regular_price !== formated_pay_price && (
                        <>

                            <span className="font-bold text-2xl text-gray-500 line-through mx-2">
                                {formated_regular_price}
                            </span>
                            <span className="font-bold text-2xl text-indigo-500 mx-2">
                                {
                                    regular_price != undefined ? getOffPercent() : null
                                }

                            </span>




                        </>
                    )}
                </span>

                <span className="font-bold text-2xl text-gray-700">
                    {/* <Capitalize lowerRest> */}
                        {sku.toUpperCase()}
                    {/* </Capitalize> */}

                </span>
            </div>
            {timeLeft && (
                <div className="w-full flex flex-col flex-grow-1 bg-green-900 rounded mx-2 px-3 py-1 text-white text-sm">
                    <span className="font-bold">Limited Time Savings</span>
                    <span>Offer ends soon : {timeLeft}</span>
                </div>
            )}{' '}
        </>
    )
}

export default Price
