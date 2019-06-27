let brands = [
    {
        id : 1,
        name : 'Maruthi Suzuki'
    },
    {
        id : 2,
        name : 'Suzuki NEXA'
    },
    {
        id : 3,
        name : 'Hyndai Motors'
    }
];
let models = [
    {
        id : 1,
        car_id: 1,
        name : 'Swift'
    },
    {
        id : 2,
        car_id: 1,
        name : 'Dzire'
    },
    {
        id : 3,
        car_id: 1,
        name : 'Brezza'
    },
    {
        id : 4,
        car_id: 2,
        name : 'Baleno'
    },
    {
        id : 5,
        car_id: 2,
        name : 'SCross'
    },
    {
        id : 6,
        car_id: 2,
        name : 'Ciaz'
    },
    {
        id : 7,
        car_id: 3,
        name : 'Creta'
    },
    {
        id : 8,
        car_id: 3,
        name : 'Verna'
    },
    {
        id : 9,
        car_id: 3,
        name : 'Grand i20'
    }
];

let brandSelectBox = $('#brand');
let modelSelectBox = $('#model');

// Display Brands
let brandOptions = `<option value="">Select a Brand</option>`;
for(let brand of brands){
    brandOptions += `<option value="${brand.id}">${brand.name}</option> \n`;
}
brandSelectBox.append(brandOptions);

// Change Event on Brand Select Box
brandSelectBox.change(function() {
    let selectedId = Number.parseInt($(this).val());
    let selectedModels = models.filter((model) => {
        return model.car_id === selectedId;
    });
    let modelOptions = `<option value="">Select a Model</option>`;
    for(let model of selectedModels){
        modelOptions += `<option value="${model.id}">${model.name}</option>`;
    }
    modelSelectBox.empty().append(modelOptions);
});

