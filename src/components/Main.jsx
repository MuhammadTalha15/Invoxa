import { useState, useEffect } from 'react'
import '../styles/main.scss'

const Main = () => {

    const [title, setTitle] = useState('INVOICE');

    const [sellerCompany, setComp] = useState('Your Company Name');
    const [sellerName, setSellerName] = useState('Your Name');
    const [companyAddress, setAdress] = useState(`Company's Address`);
    const [sellerCity, setCity] = useState('City, Area Zip');
    const [country, setCountry] = useState('Pakistan');

    const [receiverBill, setReceiver] = useState('Bill To:');
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
    

    return (
        <>
            <main className='mn'>
                <section className='inv-bldr'>
                    <div className="invc-hdr">
                        <input className='inv-title' type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="slr">
                        <input className='slr-txt' type="text" name="slr" id="slr" placeholder={sellerCompany} onChange={(e) => setComp(e.target.value)} />
                        <input className='slr-txt' type="text" name="slr" id="slr" value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
                        <input className='slr-txt' type="text" name="slr" id="slr" value={companyAddress} onChange={(e) => setAdress(e.target.value)} />
                        <input className='slr-txt' type="text" name="slr" id="slr" value={sellerCity} onChange={(e) => setCity(e.target.value)} />
                        <input className='slr-txt highlight' type="text" name="slr" id="slr" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="slr client">
                        <div className="left">
                            <input className='slr-txt highlight' type="text" name="slr" id="slr" value={receiverBill} onChange={(e) => setReceiver(e.target.value)} />
                            <input className='slr-txt' type="text" name="slr" id="slr" value={clientComp} onChange={(e) => setReceiverName(e.target.value)} />
                            <input className='slr-txt' type="text" name="slr" id="slr" value={clientAddress} onChange={(e) => setReceiverAdress(e.target.value)} />
                            <input className='slr-txt' type="text" name="slr" id="slr" value={receiverCity} onChange={(e) => setRecCity(e.target.value)} />
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
                            <input className='tble-des description' type="text" name="slr" id="slr" value={itemDesc} onChange={(e) => setClientCountry(e.target.value)} />
                            <input className='tble-des' type="text" name="slr" id="slr" value={qty} onChange={(e) => setClientCountry(e.target.value)} />
                            <input className='tble-des' type="text" name="slr" id="slr" value={tax} onChange={(e) => setClientCountry(e.target.value)} />
                            <input className='tble-des' type="text" name="slr" id="slr" value={rate} onChange={(e) => setClientCountry(e.target.value)} />
                            <input className='tble-des' type="text" name="slr" id="slr" value={amount} onChange={(e) => setClientCountry(e.target.value)} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Main
