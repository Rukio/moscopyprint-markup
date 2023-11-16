$(document).ready(function() {
$("#phone_contact, #phone, #phone_fast").mask("+7(999) 999-99-99");
// var height = 160;
// $('.for-ul li').each(function() {
//   if ($(this).index() < 5) {
//     height = height + $(this).outerHeight();
//     console.log(height);
//   }
// });
// $('.for-ul').css('max-height', height + 'px');



//карта
ymaps.ready(init);

		function init() {
			var myMap = new ymaps.Map('map', {
			    center: [55.753994, 37.622093],
			    zoom: 12,
			    controls: []
			});

			destinations = {
				'Авиамоторная': [55.751432, 37.716612],
				'Автозаводская': [55.707182, 37.657646],
				'Академическая': [55.687761, 37.573447],
				'Александровский Сад': [55.753498, 37.613608],
				'Алексееваская': [55.807800, 37.638737],
				'Алма-Атинская': [55.633493, 37.765490],
				'Алтуфьево': [55.898200, 37.587362],
				'Андроновка': [55.746390, 37.736905],
				'Аннино': [55.583200, 37.596740],
				'Арбатская': [55.752070, 37.601358],
				'Аэропорт': [55.605063, 37.286846],
				
				'Бабушкинская': [55.869556, 37.664464],
				'Багратионовская': [55.743794, 37.497979],
				'Балтийская': [55.825148, 37.494728],
				'Баррикадная': [55.760818, 37.581280],
				'Бауманская': [55.772324, 37.678822],
				'Беговая': [55.773464, 37.547279],
				'Белокаменная': [55.829349, 37.701932],
				'Беломорская улица': [55.865020, 37.474228],
				'Белорусская': [55.777439, 37.582107],
				'Беляево': [55.642748, 37.525827],

				'Бибирево': [55.883868, 37.603011],
				'Библиотека имени Ленина': [55.751280, 37.609193],
				'Борисово': [55.633582, 37.743813],
				'Боровицкая': [55.750565, 37.609083],
				'Ботанический сад': [55.845450, 37.639944],
				'Братиславская': [55.659404, 37.750451],
				'Бульвар Рокоссовского': [55.813207, 37.721552],
				'Бутырская': [55.813627, 37.601478],
				'Варшавская': [55.653294, 37.619522],
				'ВДНХ': [55.820924, 37.641492],

				'Верхние котлы': [55.689832, 37.618159],
				'Верхние Лихоборы': [55.856038, 37.561140],
				'Владыкино': [55.846303, 37.589952],
				'Водный стадион': [55.839136, 37.487329],
				'Войковская': [55.819570, 37.496877],
				'Волгоградский проспект': [55.724886, 37.687353],
				'Волжская': [55.690765, 37.753344],
				'Волхонка': [55.744938, 37.603364],
				'Воробьевы горы': [55.711777, 37.560824],
				'Выставочная': [55.750018, 37.541207],

				'Выхино': [55.715103, 37.818029],
				'Деловой центр': [55.747855, 37.533155],
				'Динамо': [55.789576, 37.558070],
				'Дмитровская': [55.807881, 37.580831],
				'Добрынинская': [55.728903, 37.622565],
				'Домодедовская': [55.610650, 37.719748],
				'Дорогомиловская': [55.739547, 37.533992],
				'Достоевская': [55.781389, 37.613796],
				'Дубровка': [55.718168, 37.676892],
				'Жулебино': [55.684531, 37.854420],

				'ЗИЛ': [55.699564, 37.648847],
				'Зорге': [55.789355, 37.506795],
				'Зябликово': [55.612329, 37.745205],
				'Измайлово': [55.807800, 37.638737],
				'Измайловская': [55.788191, 37.782148],
				'Измайловский парк': [55.898200, 37.587362],
				'Калужская': [55.655760, 37.543256],
				'Кантемировская': [55.636119, 37.656411],
				'Каховская': [55.653013, 37.599479],
				'Каширская': [55.655493, 37.650431],

				'Киевская': [55.744256, 37.567236],
				'Китай-город': [55.754120, 37.634298],
				'Кожуховская': [55.706259, 37.685440],
				'Коломенская': [55.678407, 37.663827],
				'Комсомольская': [55.774350, 37.653846],
				'Коньково': [55.632055, 37.519227],
				'Коптево': [55.840842, 37.520722],
				'Котельники': [55.674138, 37.858923],
				'Красногвардейская': [55.613645, 37.745883],
				'Краснопресненская': [55.760319, 37.576959],

				'Красносельская': [55.779657, 37.665853],
				'Красные ворота': [55.769072, 37.649077],
				'Крестьянская застава': [55.732397, 37.665023],
				'Кропоткинская': [55.745012, 37.604030],
				'Крылатская': [55.757670, 37.407290],
				'Крымская': [55.690168, 37.604777],
				'Кузнецкий мост': [55.761174, 37.624645],
				'Кузьминки': [55.705463, 37.766145],
				'Кунцевская': [55.730756, 37.446529],
				'Курская': [55.758524, 37.658760],

				'Кутузовская': [55.740165, 37.533102],
				'Ленинский проспект': [55.705769, 37.585999],
				'Лермантовский проспект': [55.701184, 37.852177],
				'Лихоборы': [55.847669, 37.553037],
				'Локомотив': [55.803213, 37.745386],
				'Ломоносовский проспект': [55.706793, 37.517225],
				'Лубянка': [55.760139, 37.626505],
				'Лужники': [55.720885, 37.560949],
				'Люблино': [55.676928, 37.761976],
				'Марксисткая': [55.741303, 37.655957],

				'Марьина роща': [55.793664, 37.617033],
				'Марьино': [55.651001, 37.743527],
				'Маяковская': [55.769418, 37.596972],
				'Медведково': [55.887546, 37.660895],
				'Международная': [55.748553, 37.533237],
				'Менделеевская': [55.781826, 37.598499],
				'Минская': [55.723707, 37.497707],
				'Молодежная': [55.740905, 37.416927],
				'Нагатинская': [55.684114, 37.623071],
				'Нагорная': [55.672831, 37.610639],

				'Нахимовский проспект': [55.661816, 37.604887],
				'Нижегородская': [55.731156, 37.727472],
				'Новогиреево': [55.751609, 37.817839],
				'Новокосино': [55.745113, 37.864052],
				'Новокузнецкая': [55.741850, 37.629295],
				'Новослободская': [55.779565, 37.601421],
				'Новохохловская': [55.724459, 37.717824],
				'Новые черемушки': [55.670077, 37.554493],
				'Окружная': [55.848404, 37.573110],
				'Октябрьская': [55.731239, 37.612807],
				
				'Октябрьское поле': [55.793066, 37.494077],
				'Орехово': [55.614015, 37.693963],
				'Отрадное': [55.862728, 37.603912],
				'Охотный ряд': [55.756993, 37.615910],
				'Павелецкая': [55.731432, 37.636335],
				'Панфиловская': [55.798325, 37.499973],
				'Парк культуры': [55.734997, 37.593268],
				'Парк Победы': [55.736097, 37.516930],
				'Первомайская': [55.794593, 37.798893],
				'Перово': [55.751063, 37.784416],

				'Петровский парк': [55.790681, 37.555964],
				'Петровско-Разумовская': [55.836921, 37.573364],
				'Печатники': [55.692517, 37.728321],
				'Пионерская': [55.735960, 37.466914],
				'Планерная': [55.861761, 37.436033],
				'Площадь Ильича': [55.747237, 37.680989],
				'Площадь Революции': [55.756381, 37.622574],
				'Плющиха': [55.747885, 37.583298],
				'Полежаевская': [55.777712, 37.521773],
				'Полянка': [55.736798, 37.618813],

				'Пражская': [55.612680, 37.604697],
				'Преображенская площадь': [55.796233, 37.715301],
				'Пролетарская': [55.731436, 37.664366],
				'Проспект Вернадского': [55.677753, 37.506575],
				'Проспект Мира': [55.779785, 37.633365],
				'Профсоюзная': [55.677475, 37.562616],
				'Пушкинская': [55.765486, 37.604682],
				'Пятницкое шоссе': [55.857249, 37.355405],
				'Раменки': [55.698286, 37.499289],
				'Речной вокзал': [55.854895, 37.476101],

				'Рижская': [55.792536, 37.636294],
				'Римская': [55.746221, 37.681417],
				'Ростокино': [55.839308, 37.668666],
				'Румянцево': [55.632863, 37.444365],
				'Рязанский проспект': [55.716285, 37.792871],
				'Савеловская': [55.794072, 37.587427],
				'Саларьево': [55.621670, 37.424435],
				'Свиблово': [55.854710, 37.651625],
				'Севастопольская': [55.651489, 37.597784],
				'Селигерская': [55.865159, 37.545811],

				'Семеновская': [55.783055, 37.718951],
				'Серпуховская': [55.726878, 37.624834],
				'Славянский бульвар': [55.729360, 37.472298],
				'Смоленская': [55.747894, 37.583862],
				'Сокол': [55.804304, 37.515884],
				'Соколиная гора': [55.770017, 37.745102],
				'Сокольники': [55.789317, 37.680721],
				'Спартак': [55.818068, 37.435451],
				'Спортивная': [55.723817, 37.565820],
				'Сретенский бульвар': [55.766193, 37.636508],


				'Стрешнего': [55.812184, 37.486472],
				'Строгино': [55.803741, 37.403489],
				'Студенческая': [55.738820, 37.548633],
				'Сухаревская': [55.772352, 37.632636],
				'Сходненская': [55.850496, 37.439771],
				'Таганская': [55.739501, 37.652523],
				'Тверская': [55.764847, 37.605941],
				'Театральная': [55.758621, 37.617295],
				'Текстильщики': [55.708929, 37.731730],
				'Теплый стан': [55.619676, 37.506183],


				'Технопарк': [55.694556, 37.664304],
				'Тимирязевская': [55.819049, 37.575667],
				'Третьяковская': [55.740789, 37.625569],
				'Тропарево': [55.644781, 37.471732],
				'Трубная': [55.767495, 37.621865],
				'Тульская': [55.709574, 37.622751],
				'Тургеневская': [55.765155, 37.637061],
				'Тушинская': [55.827964, 37.437822],
				'Угрешская': [55.717944, 37.695727],
				'Улица 1905 года': [55.764573, 37.561400],


				'Улица Академика Янгеля': [55.595335, 37.600280],
				'Университет': [55.691854, 37.535003],
				'Филевский парк': [55.739449, 37.483189],
				'Фили': [55.746963, 37.513930],
				'Фонвизинская': [55.823834, 37.585685],
				'Фрунзенская': [55.727271, 37.580834],
				'Ховрино': [55.878726, 37.480917],
				'Ходынское поле': [55.787539, 37.544875],
				'Хорошево': [55.776410, 37.507233],
				'ЦСКА': [55.785617, 37.532172],


				'Царицыно': [55.621546, 37.668934],
				'Цветной Бульвар': [55.771682, 37.620454],
				'Челобитьево': [55.902291, 37.671666],
				'Черкизовская': [55.803558, 37.744508],
				'Чертановская': [55.640722, 37.605254],
				'Чеховская': [55.765898, 37.608125],
				'Чистые пруды': [55.764793, 37.638509],
				'Чкаловская': [55.755757, 37.658426],
				'Шаболовская': [55.718748, 37.608019],
				'Шелепиха': [55.756673, 37.523896],


				'Шипиловская': [55.620440, 37.743798],
				'Шоссе Энтузиастов': [55.758379, 37.751390],
				'Щукинская': [55.809352, 37.462973],
				'Электрозаводская': [55.781998, 37.705379],
				'Юго-Западная': [55.662655, 37.482248],
				'Южная': [55.621523, 37.609469],
				'Ясенево': [55.606216, 37.533029],
		},      

		    $('.goto').on('click', function(e){
		    	e.preventDefault();

		    	var pos = $(this).data('map'); 

		    	console.log(pos);

		    	// переходим по координатам
		    	myMap.panTo(destinations[pos], {
		    	    flying: 0
		    	});
		    });


		    var myPlacemark1 = new ymaps.Placemark(destinations['Авиамоторная'], {
		    }, {
		    	iconLayout: 'default#image',
		    });
         var myPlacemark2 = new ymaps.Placemark(destinations['Автозаводская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark999 = new ymaps.Placemark(destinations['Академическая'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark3 = new ymaps.Placemark(destinations['Александровский Сад'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark4 = new ymaps.Placemark(destinations['Алексееваская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark5 = new ymaps.Placemark(destinations['Алма-Атинская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark6 = new ymaps.Placemark(destinations['Алтуфьево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark7 = new ymaps.Placemark(destinations['Андроновка'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark8 = new ymaps.Placemark(destinations['Аннино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark9 = new ymaps.Placemark(destinations['Арбатская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark10 = new ymaps.Placemark(destinations['Аэропорт'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark11 = new ymaps.Placemark(destinations['Бабушкинская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark12 = new ymaps.Placemark(destinations['Багратионовская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark13 = new ymaps.Placemark(destinations['Балтийская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark14 = new ymaps.Placemark(destinations['Баррикадная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark14 = new ymaps.Placemark(destinations['Бауманская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark15 = new ymaps.Placemark(destinations['Беговая'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark16 = new ymaps.Placemark(destinations['Белокаменная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark17 = new ymaps.Placemark(destinations['Беломорская улица'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark18 = new ymaps.Placemark(destinations['Белорусская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark19 = new ymaps.Placemark(destinations['Беляево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark20 = new ymaps.Placemark(destinations['Бибирево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark21 = new ymaps.Placemark(destinations['Библиотека имени Ленина'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark22 = new ymaps.Placemark(destinations['Борисово'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark23 = new ymaps.Placemark(destinations['Боровицкая'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark24 = new ymaps.Placemark(destinations['Ботанический сад'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark24 = new ymaps.Placemark(destinations['Братиславская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark25 = new ymaps.Placemark(destinations['Бульвар Рокоссовского'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark26 = new ymaps.Placemark(destinations['Бутырская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark27 = new ymaps.Placemark(destinations['Варшавская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark28 = new ymaps.Placemark(destinations['Верхние котлы'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark29 = new ymaps.Placemark(destinations['Верхние Лихоборы'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark30 = new ymaps.Placemark(destinations['Владыкино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark31 = new ymaps.Placemark(destinations['Водный стадион'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark31 = new ymaps.Placemark(destinations['Войковская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark32 = new ymaps.Placemark(destinations['Волгоградский проспект'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark33 = new ymaps.Placemark(destinations['Волжская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark34 = new ymaps.Placemark(destinations['Волхонка'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark35 = new ymaps.Placemark(destinations['Воробьевы горы'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark36 = new ymaps.Placemark(destinations['Выставочная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark37 = new ymaps.Placemark(destinations['Выхино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark38 = new ymaps.Placemark(destinations['Деловой центр'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark39 = new ymaps.Placemark(destinations['Динамо'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark40 = new ymaps.Placemark(destinations['Дмитровская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark41 = new ymaps.Placemark(destinations['Домодедовская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark42 = new ymaps.Placemark(destinations['Дорогомиловская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark43 = new ymaps.Placemark(destinations['Достоевская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark43 = new ymaps.Placemark(destinations['Дубровка'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark44 = new ymaps.Placemark(destinations['Жулебино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark45 = new ymaps.Placemark(destinations['ЗИЛ'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark46 = new ymaps.Placemark(destinations['Зорге'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark47 = new ymaps.Placemark(destinations['Зябликово'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark48 = new ymaps.Placemark(destinations['Измайлово'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark49 = new ymaps.Placemark(destinations['Измайловская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark50 = new ymaps.Placemark(destinations['Измайловский парк'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark51 = new ymaps.Placemark(destinations['Калужская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark52 = new ymaps.Placemark(destinations['Кантемировская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark53 = new ymaps.Placemark(destinations['Каховская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark54 = new ymaps.Placemark(destinations['Каширская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark55 = new ymaps.Placemark(destinations['Киевская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark56 = new ymaps.Placemark(destinations['Китай-город'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark57 = new ymaps.Placemark(destinations['Кожуховская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark58 = new ymaps.Placemark(destinations['Коломенская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark59 = new ymaps.Placemark(destinations['Комсомольская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark60 = new ymaps.Placemark(destinations['Коньково'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark61 = new ymaps.Placemark(destinations['Коптево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark62 = new ymaps.Placemark(destinations['Котельники'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark63 = new ymaps.Placemark(destinations['Красногвардейская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark64 = new ymaps.Placemark(destinations['Краснопресненская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark65 = new ymaps.Placemark(destinations['Красносельская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark66 = new ymaps.Placemark(destinations['Красные ворота'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark67 = new ymaps.Placemark(destinations['Крестьянская застава'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark68 = new ymaps.Placemark(destinations['Кропоткинская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark69 = new ymaps.Placemark(destinations['Крылатская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark70 = new ymaps.Placemark(destinations['Крымская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark71 = new ymaps.Placemark(destinations['Кузнецкий мост'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark72 = new ymaps.Placemark(destinations['Кузнецкий мост'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark73 = new ymaps.Placemark(destinations['Кузьминки'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark74 = new ymaps.Placemark(destinations['Кунцевская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark75 = new ymaps.Placemark(destinations['Курская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark76 = new ymaps.Placemark(destinations['Кутузовская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark77 = new ymaps.Placemark(destinations['Ленинский проспект'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark78 = new ymaps.Placemark(destinations['Лермантовский проспект'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark79 = new ymaps.Placemark(destinations['Лихоборы'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark80 = new ymaps.Placemark(destinations['Локомотив'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark81 = new ymaps.Placemark(destinations['Ломоносовский проспект'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark82 = new ymaps.Placemark(destinations['Лубянка'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark83 = new ymaps.Placemark(destinations['Лужники'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark84 = new ymaps.Placemark(destinations['Люблино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark85 = new ymaps.Placemark(destinations['Марьино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark86 = new ymaps.Placemark(destinations['Марксисткая'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark87 = new ymaps.Placemark(destinations['Маяковская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark88 = new ymaps.Placemark(destinations['Медведково'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark89 = new ymaps.Placemark(destinations['Международная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark90 = new ymaps.Placemark(destinations['Менделеевская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark91 = new ymaps.Placemark(destinations['Минская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark92 = new ymaps.Placemark(destinations['Молодежная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark93 = new ymaps.Placemark(destinations['Нагатинская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark94 = new ymaps.Placemark(destinations['Нагорная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark95 = new ymaps.Placemark(destinations['Нахимовский проспект'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark96 = new ymaps.Placemark(destinations['Нижегородская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark97= new ymaps.Placemark(destinations['Новогиреево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark98 = new ymaps.Placemark(destinations['Новокосино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark99 = new ymaps.Placemark(destinations['Новокузнецкая'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark100 = new ymaps.Placemark(destinations['Новослободская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark101 = new ymaps.Placemark(destinations['Новохохловская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark102 = new ymaps.Placemark(destinations['Новые черемушки'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark103 = new ymaps.Placemark(destinations['Окружная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark104 = new ymaps.Placemark(destinations['Октябрьская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark105 = new ymaps.Placemark(destinations['Октябрьское поле'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark106 = new ymaps.Placemark(destinations['Орехово'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark107 = new ymaps.Placemark(destinations['Отрадное'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark108 = new ymaps.Placemark(destinations['Охотный ряд'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark109 = new ymaps.Placemark(destinations['Павелецкая'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark110 = new ymaps.Placemark(destinations['Панфиловская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark111 = new ymaps.Placemark(destinations['Парк культуры'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark112 = new ymaps.Placemark(destinations['Парк Победы'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark113 = new ymaps.Placemark(destinations['Первомайская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemar114 = new ymaps.Placemark(destinations['Перово'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark115 = new ymaps.Placemark(destinations['Петровский парк'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark116 = new ymaps.Placemark(destinations['Петровско-Разумовская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark117 = new ymaps.Placemark(destinations['Печатники'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark118 = new ymaps.Placemark(destinations['Пионерская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark119 = new ymaps.Placemark(destinations['Планерная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark120 = new ymaps.Placemark(destinations['Площадь Ильича'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark121 = new ymaps.Placemark(destinations['Площадь Революции'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark122 = new ymaps.Placemark(destinations['Плющиха'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark123 = new ymaps.Placemark(destinations['Полежаевская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark124 = new ymaps.Placemark(destinations['Полянка'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark125 = new ymaps.Placemark(destinations['Пражская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark126 = new ymaps.Placemark(destinations['Преображенская площадь'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark127 = new ymaps.Placemark(destinations['Пролетарская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark128 = new ymaps.Placemark(destinations['Проспект Вернадского'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark129 = new ymaps.Placemark(destinations['Проспект Мира'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark130 = new ymaps.Placemark(destinations['Профсоюзная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark131 = new ymaps.Placemark(destinations['Пушкинская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark132 = new ymaps.Placemark(destinations['Пятницкое шоссе'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark133 = new ymaps.Placemark(destinations['Раменки'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark134 = new ymaps.Placemark(destinations['Речной вокзал'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark135 = new ymaps.Placemark(destinations['Рижская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark136 = new ymaps.Placemark(destinations['Ростокино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark137 = new ymaps.Placemark(destinations['Румянцево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark138 = new ymaps.Placemark(destinations['Рязанский проспект'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark139 = new ymaps.Placemark(destinations['Савеловская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark140 = new ymaps.Placemark(destinations['Саларьево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark141 = new ymaps.Placemark(destinations['Свиблово'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark142 = new ymaps.Placemark(destinations['Севастопольская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark143 = new ymaps.Placemark(destinations['Селигерская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark144 = new ymaps.Placemark(destinations['Семеновская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark145 = new ymaps.Placemark(destinations['Серпуховская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark146 = new ymaps.Placemark(destinations['Славянский бульвар'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark147 = new ymaps.Placemark(destinations['Смоленская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark148 = new ymaps.Placemark(destinations['Сокол'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark149 = new ymaps.Placemark(destinations['Соколиная гора'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark150 = new ymaps.Placemark(destinations['Сокольники'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark151 = new ymaps.Placemark(destinations['Спартак'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark152 = new ymaps.Placemark(destinations['Спортивная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark153 = new ymaps.Placemark(destinations['Сретенский бульвар'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark154 = new ymaps.Placemark(destinations['Стрешнего'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark155 = new ymaps.Placemark(destinations['Строгино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark156 = new ymaps.Placemark(destinations['Студенческая'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark157 = new ymaps.Placemark(destinations['Сухаревская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark158 = new ymaps.Placemark(destinations['Сходненская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark159 = new ymaps.Placemark(destinations['Таганская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark160 = new ymaps.Placemark(destinations['Тверская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark161 = new ymaps.Placemark(destinations['Театральная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark162 = new ymaps.Placemark(destinations['Текстильщики'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark163 = new ymaps.Placemark(destinations['Технопарк'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark164 = new ymaps.Placemark(destinations['Тимирязевская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark165 = new ymaps.Placemark(destinations['Третьяковская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark166 = new ymaps.Placemark(destinations['Тропарево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark167 = new ymaps.Placemark(destinations['Трубная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark168 = new ymaps.Placemark(destinations['Тульская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark169 = new ymaps.Placemark(destinations['Тургеневская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark170 = new ymaps.Placemark(destinations['Тушинская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark171 = new ymaps.Placemark(destinations['Угрешская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark172 = new ymaps.Placemark(destinations['Улица 1905 года'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark173 = new ymaps.Placemark(destinations['Улица Академика Янгеля'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark174 = new ymaps.Placemark(destinations['Университет'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark175 = new ymaps.Placemark(destinations['Филевский парк'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark176 = new ymaps.Placemark(destinations['Фили'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark177 = new ymaps.Placemark(destinations['Фонвизинская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark178 = new ymaps.Placemark(destinations['Фрунзенская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark179 = new ymaps.Placemark(destinations['Ховрино'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark180 = new ymaps.Placemark(destinations['Ходынское поле'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark181 = new ymaps.Placemark(destinations['Хорошево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark182 = new ymaps.Placemark(destinations['Марксисткая'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark183 = new ymaps.Placemark(destinations['ЦСКА'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark184 = new ymaps.Placemark(destinations['Царицыно'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark185 = new ymaps.Placemark(destinations['Цветной Бульвар'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark186 = new ymaps.Placemark(destinations['Челобитьево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark187 = new ymaps.Placemark(destinations['Черкизовская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark8188 = new ymaps.Placemark(destinations['Чертановская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark189 = new ymaps.Placemark(destinations['Чеховская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark190 = new ymaps.Placemark(destinations['Чистые пруды'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark191 = new ymaps.Placemark(destinations['Чкаловская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark192 = new ymaps.Placemark(destinations['Шаболовская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark193 = new ymaps.Placemark(destinations['Шелепиха'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark194 = new ymaps.Placemark(destinations['Шипиловская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark195 = new ymaps.Placemark(destinations['Шоссе Энтузиастов'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark196 = new ymaps.Placemark(destinations['Щукинская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark197 = new ymaps.Placemark(destinations['Электрозаводская'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark198 = new ymaps.Placemark(destinations['Юго-Западная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark199 = new ymaps.Placemark(destinations['Южная'], {
		    }, {
		    	iconLayout: 'default#image',
				});
				var myPlacemark200 = new ymaps.Placemark(destinations['Ясенево'], {
		    }, {
		    	iconLayout: 'default#image',
				});
			
				
		    myMap.geoObjects
						.add(myPlacemark1)
						.add(myPlacemark2)
						.add(myPlacemark3)
						.add(myPlacemark4)
						.add(myPlacemark5)
						.add(myPlacemark6)
						.add(myPlacemark7)
						.add(myPlacemark8)
						.add(myPlacemark9)
						.add(myPlacemark10)
						.add(myPlacemark11)
						.add(myPlacemark12)
						.add(myPlacemark13)
						.add(myPlacemark14)
						.add(myPlacemark15)
						.add(myPlacemark16)
						.add(myPlacemark17)
						.add(myPlacemark18)
						.add(myPlacemark19)
						.add(myPlacemark20)
						.add(myPlacemark21)
						.add(myPlacemark22)
						.add(myPlacemark23)
						.add(myPlacemark24)
						.add(myPlacemark25)
						.add(myPlacemark26)
						.add(myPlacemark27)
						.add(myPlacemark28)
						.add(myPlacemark29)
						.add(myPlacemark30)
						.add(myPlacemark31)
						.add(myPlacemark32)
						.add(myPlacemark33)
						.add(myPlacemark34)
						.add(myPlacemark35)
						.add(myPlacemark36)
						.add(myPlacemark37)
						.add(myPlacemark38)
						.add(myPlacemark39)
						.add(myPlacemark40)
						.add(myPlacemark41)
						.add(myPlacemark42)
						.add(myPlacemark43)
						.add(myPlacemark44)
						.add(myPlacemark45)
						.add(myPlacemark46)
						.add(myPlacemark47)
						.add(myPlacemark48)
						.add(myPlacemark49)
						.add(myPlacemark50)
						.add(myPlacemark51)
						.add(myPlacemark52)
						.add(myPlacemark53)
						.add(myPlacemark54)
						.add(myPlacemark55)
						.add(myPlacemark56)
						.add(myPlacemark57)
						.add(myPlacemark58)
						.add(myPlacemark59)
						.add(myPlacemark60)
						.add(myPlacemark61)
						.add(myPlacemark62)
						.add(myPlacemark63)
						.add(myPlacemark64)
						.add(myPlacemark65)
						.add(myPlacemark66)
						.add(myPlacemark67)
						.add(myPlacemark68)
						.add(myPlacemark69)
						.add(myPlacemark70)
						.add(myPlacemark71)
						.add(myPlacemark72)
						.add(myPlacemark73)
						.add(myPlacemark74)
						.add(myPlacemark75)
						.add(myPlacemark76)
						.add(myPlacemark77)
						.add(myPlacemark78)
						.add(myPlacemark79)
						.add(myPlacemark80)
						.add(myPlacemark81)
						.add(myPlacemark82)
						.add(myPlacemark83)
						.add(myPlacemark84)
						.add(myPlacemark85)
						.add(myPlacemark86)
						.add(myPlacemark87)
						.add(myPlacemark88)
						.add(myPlacemark89)
						.add(myPlacemark90)
						.add(myPlacemark91)
						.add(myPlacemark92)
						.add(myPlacemark93)
						.add(myPlacemark94)
						.add(myPlacemark95)
						.add(myPlacemark96)
						.add(myPlacemark97)
						.add(myPlacemark98)
						.add(myPlacemark99)
						.add(myPlacemark100)
						.add(myPlacemark101)
						.add(myPlacemark102)
						.add(myPlacemark103)
						.add(myPlacemark104)
						.add(myPlacemark105)
						.add(myPlacemark106)
						.add(myPlacemark107)
						.add(myPlacemark108)
						.add(myPlacemark109)
						.add(myPlacemark110)
						.add(myPlacemark111)
						.add(myPlacemark112)
						.add(myPlacemark113)
						.add(myPlacemark114)
						.add(myPlacemark115)
						.add(myPlacemark116)
						.add(myPlacemark117)
						.add(myPlacemark118)
						.add(myPlacemark119)
						.add(myPlacemark120)
						.add(myPlacemark121)
						.add(myPlacemark122)
						.add(myPlacemark123)
						.add(myPlacemark124)
						.add(myPlacemark125)
						.add(myPlacemark126)
						.add(myPlacemark127)
						.add(myPlacemark128)
						.add(myPlacemark129)
						.add(myPlacemark130)
						.add(myPlacemark131)
						.add(myPlacemark132)
						.add(myPlacemark133)
						.add(myPlacemark134)
						.add(myPlacemark135)
						.add(myPlacemark136)
						.add(myPlacemark137)
						.add(myPlacemark138)
						.add(myPlacemark139)
						.add(myPlacemark140)
						.add(myPlacemark141)
						.add(myPlacemark142)
						.add(myPlacemark143)
						.add(myPlacemark144)
						.add(myPlacemark145)
						.add(myPlacemark146)
						.add(myPlacemark147)
						.add(myPlacemark148)
						.add(myPlacemark149)
						.add(myPlacemark150)
						.add(myPlacemark151)
						.add(myPlacemark152)
						.add(myPlacemark153)
						.add(myPlacemark154)
						.add(myPlacemark155)
						.add(myPlacemark156)
						.add(myPlacemark157)
						.add(myPlacemark158)
						.add(myPlacemark159)
						.add(myPlacemark160)
						.add(myPlacemark161)
						.add(myPlacemark162)
						.add(myPlacemark163)
						.add(myPlacemark164)
						.add(myPlacemark165)
						.add(myPlacemark166)
						.add(myPlacemark167)
						.add(myPlacemark168)
						.add(myPlacemark169)
						.add(myPlacemark170)
						.add(myPlacemark171)
						.add(myPlacemark172)
						.add(myPlacemark173)
						.add(myPlacemark174)
						.add(myPlacemark175)
						.add(myPlacemark176)
						.add(myPlacemark177)
						.add(myPlacemark178)
						.add(myPlacemark179)
						.add(myPlacemark180)
						.add(myPlacemark181)
						.add(myPlacemark182)
						.add(myPlacemark183)
						.add(myPlacemark184)
						.add(myPlacemark185)
						.add(myPlacemark186)
						.add(myPlacemark187)
						.add(myPlacemark188)
						.add(myPlacemark189)
						.add(myPlacemark190)
						.add(myPlacemark191)
						.add(myPlacemark192)
						.add(myPlacemark193)
						.add(myPlacemark194)
						.add(myPlacemark195)
						.add(myPlacemark196)
						.add(myPlacemark197)
						.add(myPlacemark198)
						.add(myPlacemark199)
      			.add(myPlacemark200);
		}
});

