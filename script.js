$(document).ready(function() {
  sum();
  $('#repeat1').find("#qty, #amount").on("keydown keyup", function() {
    sum();
  });
});

function sum(repeat1) {
  var qty = $(repeat1).find('#qty').val();
  var amount = $(repeat1).find('#amount').val();
  var result = 0;
  result = parseFloat(qty) * parseFloat(amount);
  if (!isNaN(result)) {
    $(repeat1).find('#total_amount').val(result + 'лв');
  }
}

function calcSubTotal() {
  let subTotal = 0;
  $('.repeat1').each((i, repeat1) => {
    let total = $(repeat1).find('#total_amount').val();
    total = Number(total.slice(0, -2));
    subTotal += total;
  });
  $(".totals").find('#sub-total').val(subTotal + 'лв');
  totalDiscount(subTotal);
}

function totalDiscount(sub) {
  let discount = $('#discount').val();
  if (discount > 0 && discount <= 100) {
    discount = discount * 0.01;
    discount *= sub;
    $(".totals").find('#total-discount').val(discount + 'лв');

  }
  $('.totals').find('#total-sum').val(sub - discount + 'лв');
}

$('.input-product').keyup(() => {
  $('.repeat1').each((i, repeat1) => {
    sum(repeat1);
  });
  calcSubTotal();
})

$('#add-product').click(() => {
  let repeat = $('#repeat');
  let repeat1 = $('#repeat1').clone(true);
  repeat1.find('input').val('');
  repeat1.appendTo(repeat);
});
