const displayCurrency = (price) => {
    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'ETB',
    minimumFractionDigits: 2

    }); 
    return formatter.format(price);
  }
  export default displayCurrency;
