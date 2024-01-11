Array.from(document.querySelectorAll('.plp-fragment-wrapper')).map((productCard) => {
  const product = productCard.childNodes[0]
  const name = product.getAttribute('data-product-name')
  const price = product.getAttribute('data-price')
  const image = product.querySelector('.plp-image.plp-product__image').getAttribute('src')
  const link = product.querySelector('.plp-product__image-link').getAttribute('href')
  const description = product.querySelector('.plp-price-module__description')?.textContent
  const subscript = product.querySelector('.plp-price__subscript')?.textContent
  return { image, name, description, price, link, subscript }
})

// https://www.ikea.com/gb/en/cat/best-sellers/?page=30