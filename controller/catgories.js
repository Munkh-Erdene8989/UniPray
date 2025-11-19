exports.getCatgories = (req , res, next) => {
    res.status(200).send({ 
        success: true, 
        data: "Категориудын жагсаалт" 
        });
};
exports.getCatgory = (req , res, next) => {
    res.status(200).send({ 
        success: true, 
        data: `${req.params.id} Шинэ категори нэмэгдлээ`
        });
}; 
exports.updateatgory = (req , res, next) => {
    res.status(200).send({ 
        success: true, 
        data: `${req.params.id} Шинэ категори нэмэгдлээ`
        });
}; 

exports.deleteCatgory = (req , res, next) => {
    res.status(200).send({ 
        success: true, 
        data: `${req.params.id} категори устгагдлаа`
        });
}; 
