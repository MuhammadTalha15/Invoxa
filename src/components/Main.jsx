import { useState, useEffect } from 'react'
import '../styles/main.scss'

const Main = () => {

    const [title, setTitle] = useState('INVOICE');

    const [sellerCompany, setComp] = useState('Your Company Name');
    const [sellerName, setSellerName] = useState('Your Name');
    const [companyAddress, setAdress] = useState(`Company's Address`);
    const [sellerCity, setCity] = useState('City, Area Zip');
    const [country, setCountry] = useState('Pakistan');

    const [receiverBill, setReceiver] = useState('Bill To: ');
    const [clientComp, setReceiverName] = useState(`Your Client's Name`);
    const [clientAddress, setReceiverAdress] = useState(`Clients Address`);
    const [receiverCity, setRecCity] = useState('City, Area Zip');
    const [clientCountry, setClientCountry] = useState('Pakistan');

    const [invoiceNumber, setInvoice] = useState('Invoice#');

    const [itemDesc, setDescription] = useState(`Item Description`);
    const [qty, setQty] = useState(`Qty`);
    const [tax, setTax] = useState('Tax');
    const [rate, setRate] = useState('Rate');
    const [amount, setAmount] = useState('Amount');

    const [quantityValue, setQuantityValue] = useState(2);
    const [rateValue, setRateValue] = useState(200);
    const [taxValue, setTaxValue] = useState(5);
    const [amountValue, setAmountValue] = useState(rateValue * quantityValue);

    const [subTotal, setSubTotal] = useState('Sub Total');
    const [finalTax, setFinalTax] = useState('');
    const [TOTAL, setAllTotal] = useState('TOTAL');

    const [finalSubTotal, setFinalSubTotal] = useState();
    const [finalAllTotal, setFinalAllTotal] = useState();

    useEffect(() => {

        setAmountValue(Number(rateValue) * Number(quantityValue));
    }, [quantityValue, rateValue]);


    return (
        <>
            <main className='mn'>
                <section className='inv-bldr'>
                    <div className="invc-hdr">
                        <input className='inv-title' type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="slr">
                        <input className='slr-txt' type="text" name="slr" id="slr" placeholder="Your Company Name" onChange={(e) => setComp(e.target.value)} />
                        <input className='slr-txt' type="text" name="slr" id="slr" placeholder='Your Name' onChange={(e) => setSellerName(e.target.value)} />
                        <input className='slr-txt' type="text" name="slr" id="slr" placeholder={`Company's Address`} onChange={(e) => setAdress(e.target.value)} />
                        <input className='slr-txt' type="text" name="slr" id="slr" placeholder='City, Area Zip' onChange={(e) => setCity(e.target.value)} />
                        <input className='slr-txt highlight' placeholder='Your Country' type="text" name="slr" id="slr" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="slr client">
                        <div className="left">
                            <input className='slr-txt highlight' type="text" name="slr" id="slr" value={receiverBill} onChange={(e) => setReceiver(e.target.value)} />
                            <input className='slr-txt' type="text" name="slr" id="slr" placeholder={`Your Client's Name`} onChange={(e) => setReceiverName(e.target.value)} />
                            <input className='slr-txt' type="text" name="slr" id="slr" placeholder={`Client's Address`} onChange={(e) => setReceiverAdress(e.target.value)} />
                            <input className='slr-txt' type="text" name="slr" id="slr" placeholder={`City, Area Zip`} onChange={(e) => setRecCity(e.target.value)} />
                            <input className='slr-txt highlight' type="text" name="slr" id="slr" value={clientCountry} onChange={(e) => setClientCountry(e.target.value)} />
                        </div>
                        <div className="right">
                            <input className='slr-txt highlight' type="text" name="slr" id="slr" value={invoiceNumber} onChange={(e) => setInvoice(e.target.value)} />
                            <label htmlFor="invc-date" className='invc-label'>Invoice Date</label>
                            <input className='slr-txt date' type="date" name="" id="invc-date" />
                            <label htmlFor="due-data" className='invc-label'>Due Date</label>
                            <input className='slr-txt date' type="date" name="" id="due-data" />
                        </div>
                    </div>
                    <div className="table-hdr">
                        <div className="tble-tp">
                            <input className='tble-des description' type="text" name="slr" id="slr" value={itemDesc} onChange={(e) => setDescription(e.target.value)} />
                            <input className='tble-des' type="text" name="slr" id="slr" value={qty} onChange={(e) => setQty(e.target.value)} />
                            <input className='tble-des' type="text" name="slr" id="slr" value={rate} onChange={(e) => setRate(e.target.value)} />
                            <input className='tble-des' type="text" name="slr" id="slr" value={tax} onChange={(e) => setTax(e.target.value)} />
                            <input className='tble-des' type="text" name="slr" id="slr" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                    </div>
                    <div className="item-list-cnt">
                        <div className="item-list">
                            <textarea name="item" id="itemDescription" className='itemDescription' placeholder='Enter Item Name/Description'></textarea>
                            <input type="number" name="" className='qtyValue' value={quantityValue} onChange={(e) => setQuantityValue(Number(e.target.value))} id="" />
                            <input type="text" name="" className='rateValue' value={rateValue} onChange={(e) => setRateValue(e.target.value)} id="" />
                            <input type="number" name="" className='taxValue' value={taxValue} onChange={(e) => setTaxValue(e.target.value)} id="" />
                            <input type="text" name="" className='amountValue' value={amountValue} onChange={(e) => setAmountValue(e.target.value)} readOnly id="" />
                        </div>
                    </div>
                    <div className="cal-cnt">
                        <div className="lft-btn">
                            <button className='add-btn'><span className='add-icon'></span>Add Line Item</button>
                        </div>
                        <div className="rigt-cal">
                            <div className="fnl-dta">
                                <input className='fnl-inpt' type="text" name="" id="" value={subTotal} onChange={(e) => setSubTotal(e.target.value)} />
                                <input className='fnl-data' type="text" name="" id="" value={"200.00"} readOnly />
                            </div>
                            <div className="fnl-dta">
                                <input className='fnl-inpt' type="text" name="" id="" value={`TAX`} />
                                <input className='fnl-data' type="text" name="" id="" value={"200.00"} readOnly />
                            </div>
                            <div className="fnl-dta">
                                <input className='fnl-inpt' type="text" name="" id="" value={TOTAL} onChange={(e) => setAllTotal(e.target.value)} />
                                <input className='fnl-data' type="text" name="" id="" value={"200.00"} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="fnl-txt">
                        <input type="text" value={'Notes'} className='fnl-nt-inpt' />
                        <textarea name="" className='fnl-txt-area' value={'It was great doing Bussiness with you.'} id=""></textarea>

                        <input type="text" value={'Terms and Conditions'} className='fnl-nt-inpt' />
                        <textarea name="" className='fnl-txt-area' value={'Please make the payment by the due date.'} id=""></textarea>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main
