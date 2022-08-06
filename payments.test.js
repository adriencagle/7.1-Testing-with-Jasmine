describe('payment test', function(){
    beforeEach(function(){
        billAmtInput.value = 50;
        tipAmtInput = 10;
    });
    it ('should add a new payment', function(){
        submitPaymentInfo();
        expect(Object.keys('allPayments').length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('10');
        expect(allPayments['payment1'].tipAmt).toEqual('3');
        expect(allPayments['payment1'].tipPercent).toEqual('33')
    })
    it('should update payment on table', function(){
        let curPayment = createCurPayment();
        allPayments['1'] = curPayment;
        appendPaymentTable(curPayment);
        let tableList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(tableList.length).toEqual(4);
        expect(tableList[0].innerText).toEqual('$10');
        expect(tableList[1].innerText).toEqual('$3');
        expect(tableList[2].innertext).toEqual('%33');
    })
    it('should create a new payment', function(){
        let newPayment = {
            billAmt: '10',
            tipAmt: '3',
            tipPercent:'33',
        }
        expect(createCurPayment()).toEqual(newPayment);
    })
    AfterEach(function(){
        billAmtInput.value = '';
        tipAmtInput.value  = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentID = 0;
        allPayments = {};
    })
})