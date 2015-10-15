angular
  .module('app.news')
  .factory('newsFactory', newsFactory);

  function newsFactory(){
    var factory = {
      getNews: getNews,
      getComents: getComents
    };
    return factory;

    function getNews(){
      return [
    		{
    			id: 1,
    			title: 'The First News',
    			stxt: 'The New Horizons craft has sent back colour images of the haze that surrounds the planet for the first time',
    			date: '2015/10/15',
    		},
    		{
    			id: 2,
    			title: 'The Second News',
    			stxt: 'The New Horizons craft has sent back colour images The New Horizons craft has sent back colour images',
    			date: '2015/10/16',
    		},
    		{
    			id: 3,
    			title: 'The Third News',
    			stxt: 'The New Horizons craft has sent back colour images The New Horizons craft has sent back colour images The New Horizons craft has sent back colour images',
    			date: '2015/09/18',
    		},
    		{
    			id: 4,
    			title: 'The Fourth News',
    			stxt: 'The New Horizons craft has sent back colour images of the haze that surrounds the planet for the first time',
    			date: '2015/11/10',
    		},
    		{
    			id: 5,
    			title: 'The Fifth News',
    			stxt: 'The New Horizons craft has sent back colour images of the haze that surrounds the planet for the first time',
    			date: '2015/12/25',
    		}
    	];
    }
    function getComents(){
      return [
    		{
    			id: 0,
    			newsId: 1,
    			name: 'Kate',
    			txt: 'First comment to first news',
    			datetime: '12:00 2015/10/09'
    		},
    		{
    			id: 1,
    			newsId: 1,
    			name: 'Igor',
    			txt: 'Second comment to first news',
    			datetime: '12:20 2015/10/02'
    		},
    		{
    			id: 2,
    			newsId: 2,
    			name: 'Kate',
    			txt: 'First comment to second news',
    			datetime: '11:00 2015/09/09'
    		},
    		{
    			id: 3,
    			newsId: 3,
    			name: 'Kate',
    			txt: 'First comment to third news',
    			datetime: '14:10 2015/10/06'
    		},
    		{
    			id: 4,
    			newsId: 4,
    			name: 'Kate',
    			txt: 'First comment to fourth news',
    			datetime: '18:03 2015/10/09'
    		},
    		{
    			id: 5,
    			newsId: 4,
    			name: 'Masha',
    			txt: 'Second comment to fourth news',
    			datetime: '10:00 2015/10/09'
    		},
    		{
    			id: 6,
    			newsId: 4,
    			name: 'Igor',
    			txt: 'Third comment to fourth news',
    			datetime: '10:20 2015/10/09'
    		},
    		{
    			id: 7,
    			newsId: 5,
    			name: 'Igor',
    			txt: 'First comment to fifth news',
    			datetime: '12:08 2015/10/04'
    		}
    	]
    }
  }
