<template>
  <div class="ingridients-wrap">
    <h3 class="item-title">
      <i class="fas fa-list-ul"></i>Ingridients
    </h3>
    <div class="adjust-servings">
      <div class="servings-title">Adjust Servings</div>
      <form class="servings-quantity">
        <div class="input-group quantity-holder" id="quantity-holder">
          <input
            type="text"
            name="quantity"
            class="form-control quantity-input"
            value="1"
            placeholder="1"
          />
          <div class="btn-quantity-select">
            <button class="quantity-plus" type="button">
              <i class="fas fa-plus"></i>
            </button>
            <button class="quantity-minus" type="button">
              <i class="fas fa-minus"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="checkbox checkbox-primary">
      <input id="checkbox1" type="checkbox" />
      <label for="checkbox1">1 cup sifted all purpose flour</label>
    </div>
    <div class="checkbox checkbox-primary">
      <input id="checkbox2" type="checkbox" />
      <label for="checkbox2">4 cup dry-roasted macadamia nuts</label>
    </div>
    <div class="checkbox checkbox-primary">
      <input id="checkbox3" type="checkbox" />
      <label for="checkbox3">4 large eggs</label>
    </div>
    <div class="checkbox checkbox-primary">
      <input id="checkbox4" type="checkbox" />
      <label for="checkbox4">4 cup dry-roasted macadamia nuts</label>
    </div>
    <div class="checkbox checkbox-primary">
      <input id="checkbox5" type="checkbox" />
      <label for="checkbox5">5 cup sifted all purpose flour</label>
    </div>
    <div class="checkbox checkbox-primary">
      <input id="checkbox6" type="checkbox" />
      <label for="checkbox6">8 cup dry-roasted macadamia nuts</label>
    </div>
  </div>
</template>