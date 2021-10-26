function Load(){
  companyValues=["КОМПАНИЯ","О нас","Вакансии","For the Record"];
  obj = document.getElementById("Company").getElementsByTagName("li");
  for(i = 0; i < obj.length; i++){
    obj[i].innerHTML = companyValues[i];
  }
  usefulLinksValues=["ПОЛЕЗНЫЕ ССЫЛКИ","Для исполнителей","Для разработчиков","Реклама","Для инвесторов","Для вендоров"];
  obj = document.getElementById("UsefulLinks").getElementsByTagName("li");
  for(i = 0; i < obj.length; i++){
    obj[i].innerHTML = usefulLinksValues[i];
  }
  communityValues=["СООБЩЕСТВА","Справка","Веб-плеер","Бесплатное<br>мобильное<br> приложение"];
  obj = document.getElementById("Communities").getElementsByTagName("li");
  for(i = 0; i < obj.length; i++){
    obj[i].innerHTML = communityValues[i];
  }
}
Load();