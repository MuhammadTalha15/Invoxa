import { useState, useEffect, useRef } from 'react'
import '../styles/main.scss'
import ControlPanel from './ControlPanel'
import Invoice from './Inovoice'
import html2pdf from 'html2pdf.js'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

const Main = () => {

    const [title, setTitle] = useState('INVOICE');
    const [invoiceNumber, setInvoice] = useState('Invoice# ');

    const [sellerCompany, setComp] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [companyAddress, setAdress] = useState('');
    const [sellerCity, setCity] = useState('');
    const [country, setCountry] = useState('Pakistan');

    const [receiverBill, setReceiver] = useState('Bill To: ');
    const [clientComp, setReceiverComp] = useState('');
    const [clientAddress, setReceiverAdress] = useState('');
    const [receiverCity, setRecCity] = useState('');
    const [clientCountry, setClientCountry] = useState('Pakistan');

    const [date, setDate] = useState('');
    const [dueDate, setDueDate] = useState('');


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

    const [noteHead, setNoteHead] = useState('Notes');
    const [noteData, setNoteData] = useState('It was great doing Business with you.');

    const [conditions, setConditions] = useState('Terms and Conditions');
    const [conditionsData, setConditionsData] = useState('Please make the payment by the due date.');

    useEffect(() => {

        setAmountValue(Number(rateValue) * Number(quantityValue));
    }, [quantityValue, rateValue]);

    const [items, setItems] = useState([
        { description: '', qty: 1, rate: 0, tax: 0 }
    ]);


    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };

    useEffect(() => {
        const subtotal = items.reduce((acc, item) => acc + (item.qty * item.rate), 0);
        const taxAmount = items.reduce((acc, item) => acc + ((item.qty * item.rate) * item.tax / 100), 0);
        const total = subtotal + taxAmount;

        setFinalSubTotal(subtotal);
        setFinalAllTotal(total);
    }, [items]);

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    }

    const inovicePDF = useRef();

    const handleClick = async () => {
        const canvas = await html2canvas(inovicePDF.current);
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('invoice.pdf');
        // pdf.output('dataurlnewwindow')
    }

    return (
        <>
            <main className='mn'>
                <section className='inv-bldr'>
                    <div className="invc-hdr">
                        <input className='inv-title' type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="slr">
                        <input id="companyName" name="companyName" className='slr-txt' type="text" placeholder="Your Company Name" value={sellerCompany} onChange={(e) => setComp(e.target.value)} />
                        <input id="sellerName" name="sellerName" className='slr-txt' type="text" placeholder='Your Name' value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
                        <input id="sllerAddress" name="sllerAddress" className='slr-txt' type="text" placeholder={`Company's Address`} value={companyAddress} onChange={(e) => setAdress(e.target.value)} />
                        <input id="sellerCity" name="sellerCity" className='slr-txt' type="text" placeholder='City, Area Zip' value={sellerCity} onChange={(e) => setCity(e.target.value)} />
                        <input id="sellerCountry" name="sellerCountry" className='slr-txt highlight' placeholder='Your Country' type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="slr client">
                        <div className="left">
                            <input id="clientBill" name="clientBill" className='slr-txt highlight' type="text" value={receiverBill} onChange={(e) => setReceiver(e.target.value)} />
                            <input id="clientName" name="clientName" className='slr-txt' type="text" placeholder={`Your Client's Company`} value={clientComp} onChange={(e) => setReceiverComp(e.target.value)} />
                            <input id="clientAddress" name="clientAddress" className='slr-txt' type="text" placeholder={`Client's Address`} value={clientAddress} onChange={(e) => setReceiverAdress(e.target.value)} />
                            <input id="clientCity" name="clientCity" className='slr-txt' type="text" placeholder={`City, Area Zip`} value={receiverCity} onChange={(e) => setRecCity(e.target.value)} />
                            <input id="clientCountry" name="clientCountry" className='slr-txt highlight' type="text" value={clientCountry} onChange={(e) => setClientCountry(e.target.value)} />
                        </div>
                        <div className="right">
                            <input id="invoiceNumber" name="invoiceNumber" className='slr-txt highlight' type="text" value={invoiceNumber} onChange={(e) => setInvoice(e.target.value)} />
                            <label htmlFor="invc-date" className='invc-label'>Invoice Date</label>
                            <input className='slr-txt date' type="date" name="" id="invc-date" value={date} onChange={(e) => setDate(e.target.value)} />
                            <label htmlFor="due-data" className='invc-label'>Due Date</label>
                            <input className='slr-txt date' type="date" name="" id="due-data" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                        </div>
                    </div>
                    <div className="table-hdr">
                        <div className="tble-tp">
                            <input id="itemDescription" name="itemDescription" className='tble-des description' type="text" value={itemDesc} onChange={(e) => setDescription(e.target.value)} />
                            <input id="itemQuantity" name="itemQuantity" className='tble-des nonDescription' type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
                            <input id="itemRate" name="itemRate" className='tble-des nonDescription' type="text" value={rate} onChange={(e) => setRate(e.target.value)} />
                            <input id="itemTax" name="itemTax" className='tble-des nonDescription' type="text" value={tax} onChange={(e) => setTax(e.target.value)} />
                            <input id="itemAmount" name="itemAmount" className='tble-des nonDescription' type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </div>
                    </div>
                    <div className="item-list-cnt">
                        {items.map((item, index) => (
                            <>
                                <div key={index} className="item-list">
                                    <textarea
                                        className="itemDescription"
                                        placeholder="Enter Item Name/Description"
                                        value={item.description}
                                        onChange={(e) => updateItem(index, 'description', e.target.value)}
                                    />
                                    <input
                                        type="number"
                                        className="qtyValue"
                                        value={item.qty}
                                        onChange={(e) => updateItem(index, 'qty', Number(e.target.value))}
                                    />
                                    <input
                                        type="number"
                                        step="0.01"
                                        className="rateValue"
                                        value={item.rate}
                                        onChange={(e) => updateItem(index, 'rate', parseFloat(e.target.value))}
                                    />
                                    <input
                                        type="number"
                                        className="taxValue"
                                        value={item.tax}
                                        onChange={(e) => updateItem(index, 'tax', Number(e.target.value))}
                                    />
                                    <input
                                        type="text"
                                        className="amountValue"
                                        readOnly
                                        value={(item.qty * item.rate).toFixed(2)}
                                    />
                                    <button title='Delete Item' onClick={() => handleDeleteItem(index)} className="delete-btn">✕</button>
                                </div>

                            </>
                        ))}
                    </div>
                    <div className="cal-cnt">
                        <div className="lft-btn">
                            <button onClick={() => setItems([...items, { description: '', qty: 1, rate: 0, tax: 0 }])} className='add-btn'><span className='add-icon'></span>Add Line Item</button>
                        </div>
                        <div className="rigt-cal">
                            <div className="fnl-dta">
                                <input className='fnl-inpt' type="text" name="" id="" value={subTotal} onChange={(e) => setSubTotal(e.target.value)} />
                                <input className='fnl-data' type="text" name="" id="" value={finalSubTotal?.toFixed(2)} readOnly />
                            </div>
                            <div className="fnl-dta">
                                <input className='fnl-inpt' type="text" name="" id="" value={`TAX`} />
                                <input className='fnl-data' type="text" name="" id="" value={(finalAllTotal - finalSubTotal).toFixed(2)} readOnly />
                            </div>
                            <div className="fnl-dta">
                                <input className='fnl-inpt' type="text" name="" id="" value={TOTAL} onChange={(e) => setAllTotal(e.target.value)} />
                                <input className='fnl-data' type="text" name="" id="" value={finalAllTotal?.toFixed(2)} readOnly />
                            </div>
                        </div>
                    </div>
                    <div className="fnl-txt">
                        <input type="text" value={noteHead} onChange={(e) => setNoteHead(e.target.value)} className='fnl-nt-inpt' />
                        <textarea name="" className='fnl-txt-area' value={noteData} id="noteData" onChange={(e) => setNoteData(e.target.value)}></textarea>

                        <input type="text" value={conditions} onChange={(e) => setConditions(e.target.value)} className='fnl-nt-inpt' />
                        <textarea name="" className='fnl-txt-area' value={conditionsData} onChange={(e) => setConditionsData(e.target.value)} id=""></textarea>
                    </div>
                </section>

                <ControlPanel onClick={handleClick} />
            </main>

            {/* INVOICE COMPONENT */}
            <section className='invoice-wrapper'>
                <Invoice
                    refProp={inovicePDF}
                    titleProp={title}
                    invoiceNumberProp={invoiceNumber}
                    companyNameProp={sellerCompany}
                    sellerNameProp={sellerName}
                    companyAddressProp={companyAddress}
                    sellerCityProp={sellerCity}
                    sellerCountryProp={country}
                    receiverBillProp={receiverBill}
                    clientCompProp={clientComp}
                    clientAddressProp={clientAddress}
                    receiverCityProp={receiverCity}
                    clientCountryProp={clientCountry}
                    dateProp={date}
                    dueDateProp={dueDate}
                    itemDescriptionProp={itemDesc}
                    qtyProp={qty}
                    taxProp={tax}
                    rateProp={rate}
                    amountProp={amount}
                    items={items}
                    finalSubtotalProp={finalSubTotal}
                    finalAllTotalProp={finalAllTotal}
                    noteHeadProp={noteHead}
                    noteDataProp={noteData}
                    conditionsProp={conditions}
                    conditionsDataProp={conditionsData} />
            </section>

        </>
    )
}

export default Main
