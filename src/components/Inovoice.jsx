import React from "react";
import '../styles/invoice.scss'

const Invoice = ({
    items,
    companyNameProp,
    sellerNameProp,
    companyAddressProp,
    sellerCityProp,
    sellerCountryProp,
    titleProp,
    invoiceNumberProp,
    receiverBillProp,
    clientCompProp,
    clientAddressProp,
    receiverCityProp,
    clientCountryProp,
    dateProp,
    dueDateProp,
    itemDescriptionProp,
    qtyProp,
    taxProp,
    rateProp,
    amountProp,
    finalSubtotalProp,
    finalAllTotalProp,
    noteHeadProp,
    noteDataProp,
    conditionsProp,
    conditionsDataProp,
    refProp
}) => {
    return (
        <div className="invoice" ref={refProp}>
            <div className="invoice__header">
                <div className="slr-details">
                    <h1 className="invoice__from company">{companyNameProp}</h1>
                    <div className="invoice__from">{sellerNameProp}</div>
                    <div className="invoice__from">{companyAddressProp}</div>
                    <div className="invoice__from">{sellerCityProp}</div>
                    <div className="invoice__from">{sellerCountryProp}</div>
                </div>
                <div className="invoice__title">
                    <h1 className="invc-ttle">{titleProp}</h1>
                    <span className="inc-num">{invoiceNumberProp}</span>
                </div>
            </div>

            <div className="invoice__details">
                <div className="clientDetails">
                    <h1 className="invoice__from company">{receiverBillProp}</h1>
                    <div className="invoice__from">{clientCompProp}</div>
                    <div className="invoice__from">{clientAddressProp}</div>
                    <div className="invoice__from">{receiverCityProp}</div>
                    <div className="invoice__from">{clientCountryProp}</div>
                </div>
                <div className="invcData">
                    <p className="date">
                        Invoice Date: {dateProp}
                    </p>
                    <p className="date">
                        Due Date: {dueDateProp}
                    </p>
                </div>
            </div>

            <table className="invoice__table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{itemDescriptionProp}</th>
                        <th>{qtyProp}</th>
                        <th>{taxProp}</th>
                        <th>{rateProp}</th>
                        <th>{amountProp}</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.description}</td>
                            <td>{item.qty}</td>
                            <td>{item.tax}</td>
                            <td>{item.rate}</td>
                            <td>{(item.qty * item.rate).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="invoice__totals">
                <div className="invoice__sub-total">
                    <p>Sub Total</p>
                    <p>{(Number(finalSubtotalProp)).toFixed(2)}</p>
                </div>
                <div className="invoice__tax">
                    <p>TAX</p>
                    <p>{(finalAllTotalProp - finalSubtotalProp).toFixed(2)}</p>
                </div>
                <div className="invoice__total">
                    <strong>TOTAL</strong>
                    <strong>{(Number(finalAllTotalProp)).toFixed(2)}</strong>
                </div>
            </div>

            <div className="invoice__notes">
                <strong className="lstHead">{noteHeadProp}</strong>
                <p>{noteDataProp}.</p>
            </div>

            <div className="invoice__terms">
                <strong className="lstHead">{conditionsProp}</strong>
                <p>{conditionsDataProp}</p>
            </div>

            <div className="invoice__footer">1</div>
        </div>
    );
};

export default Invoice;