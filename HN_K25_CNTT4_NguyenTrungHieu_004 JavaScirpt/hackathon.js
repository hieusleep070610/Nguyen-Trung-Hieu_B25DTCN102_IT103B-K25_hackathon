let gameList = [
    {gameId: 1, gameName: "Minecraft", gamePrice: 200, gameType: "Adventure", publisher: "Mojang",amount: 500},
    {gameId: 2, gameName: "Umamusume", gamePrice: 100, gameType: "RNG", publisher: "Cygames",amount: 400},
    {gameId: 3, gameName: "TotalWarShogun", gamePrice: 150, gameType: "Turnbase", publisher: "Sega",amount: 300}
]

function addGame() {
    let gameId = +prompt(`Nhập id game`);
    if (gameList.some(game => game.gameId === gameId)){
        alert("Id đã tồn tại, vui lòng chọn Id khác");
        return;
    }
    
    let gameName = prompt(`Nhập tên game`);
    if(gameList.some(game => game.gameName === gameName)) {
        alert("Game đã tồn tại trong cửa hàng");
        return;
    }
    if(!gameName){
        alert("Tên game không hợp lệ")
        return;
    }

    let gamePrice = prompt(`Nhập giá của game`);
    if(isNaN(gamePrice)|| gamePrice < 0){
        alert("Giá game phải là số nguyên dương");
        return;
    }

    let gameType = prompt(`Nhập thể loại game`);
    if(!gameType){
        alert("Thể loại game không hợp lệ");
        return;
    }

    let publisher = prompt(`Nhập tên nhà phát hành`);
    if(!publisher){
        alert("Nhà phát hành không hợp lệ")
        return;
    }
    let amount = +prompt(`Nhập số lượng của game`);
    if(isNaN(amount) || amount < 0){
        alert("Giá game phải là số nguyên dương");
        return;
    }
    gameList.push({gameId,gameName,gamePrice,gameType, publisher, amount});
    alert(`Đã thêm game ${gameName}`);
}
function display() {
    gameList.forEach(game => {
        console.log(`id:${game.gameId} ,Tên game: ${game.gameName}, Giá game: ${game.gamePrice}, Thể loại: ${game.gameType}, Nhà phát hành: ${game.publisher}, Số lượng: ${game.amount} `);
    });
}
function updateInfomation() {
    let name = prompt("Nhập tên game cần cập nhật");
    let found = gameList.find(found => found.gameName === name);
    if(!found){
        alert(`Game không tồn tại ở cửa hàng`);
        return;
    }
    let newPrice = prompt(`Nhập giá mới`,found.gamePrice);
    let newType = prompt(`Nhập thể loại mới`,found.gameType);
    let newPulish = prompt(`Nhập nhà phát hành mới`,found.publisher);
    let newAmount = prompt(`Nhập số lượng mới`,found.amount);
    let gamePrice = prompt(`Nhập giá của game`);
    
    found.gamePrice = newPrice;
    found.gameType = newType;
    found.publisher = newPulish;
    found.amount = newAmount;
}
function deleteGame() {
   let name = prompt("Nhập tên game cần xoá");
   let index = gameList.findIndex(index=> index.gameName === name);
   if(index === -1){
        alert(`Game không tồn tại ở cửa hàng`);
        return;
   }
   let confirm = prompt(`Có đồng ý xoá không(có/không)`);
   if(confirm.toLowerCase() === "có"){
        gameList.splice(index,1);
        alert(`Xoá thành công`);
   }
}
function updatePulish() {
    let name = prompt("Nhập tên hãng game cần cập nhật");
    let found = gameList.find(found => found.publisher === name);
    if(!found){
        alert(`Không`);
        return;
    }
    let newPulish = prompt(`Nhập nhà phát hành mới`,found.publisher);
    found.publisher = newPulish;
}
let choice;
do {
    choice = +prompt(`Vui lòng nhập lựa chọn
        1.Thêm game
        2.Hiển thị danh sách game
        3.Cập nhật thông tin game
        4.Xoá game
        5.Cập nhật hãng game
        6.Tìm game
        7.Sắp xếp game theo giá
        8.Bán game
        9.Thoát`);
    switch (choice) {
        case 1:
            addGame();
            break;
        case 2:
            display();
            break;
        case 3:
            updateInfomation();
            break;
        case 4:
            deleteGame();
            break;
        case 5:
            updatePulish();
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break
        default:
            console.log(`Lựa chọn không hợp lệ!Vui lòng nhập lại`);
            break;
    }

}while(choice!==9);

