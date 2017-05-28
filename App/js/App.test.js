import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
//import renderer from 'react-test-renderer';
import jsdom from 'jsdom';
import Application from './components/Application';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import Modal from './components/Modal';
import FormatPrice from './components/Utils/Helper';


const pricing = {
    total: 6,
    data: [
        {
            origin: "011",
            destiny: "016",
            price: "1.90"
        },
        {
            origin: "016",
            destiny: "011",
            price: "2.90"
        },
        {
            origin: "011",
            destiny: "017",
            price: "1.70"
        },
        {
            origin: "017",
            destiny: "011",
            price: "2.70"
        },
        {
            origin: "011",
            destiny: "018",
            price: "0.90"
        },
        {
            origin: "018",
            destiny: "011",
            price: "1.90"
        }
    ]
};

const plans = {
    total: 3,
    data: [
        {
            plan: "Test 30",
            time: "30"
        },
        {
            plan: "Test 60",
            time: "60"
        },
        {
            plan: "Test 120",
            time: "120"
        }
    ]
};

const details = {
    total: 4,
    data: [
        {
			ddd : "011",
			city: "Test1"
        },
        {
			ddd : "016",
			city: "Test2"
        },
        {
			ddd : "017",
			city: "Test3"
        },
        {
			ddd : "018",
			city: "Test4"
        }
    ]
};

describe('Methods', () => {

	it('format price works', () => {
		var price = FormatPrice.getSplit(1.2345),
			priceSplit = {
				int  : '1',
				float: '23'
			};

		expect(price).toEqual(priceSplit);
	});
});

describe('Event', () => {

	beforeEach(function() {
	    this.renderer = ReactTestUtils.createRenderer();
	    this.renderer.render(
	    	<Application
				testing="true"
				pricing={pricing}
				details={details}
				plans={plans}
			/>
		);

	    this.TestUtils = ReactTestUtils;
	});

	it("is a list element", function() {
	    let renderedRoot = this.renderer.getRenderOutput();
	    console.log(renderedRoot.props.children[1].refs.clickAdd);

	    //expect(renderedRoot.type).toEqual("li");
	});


});

describe('Component', () => {

	const application = renderer.create(
		<Application
			testing="true"
			pricing={pricing}
			details={details}
			plans={plans}
		/>
	);

	it('application rendering works', () => {
		console.log('application', application.props.children);
		let tree = application.toJSON();
		expect(tree).toMatchSnapshot();
	});

	const header = renderer.create(
		<Header title="Teste Header" />
	);

	it('header rendering works', () => {

		let tree = header.toJSON();
		expect(tree).toMatchSnapshot();
	});

	const form = renderer.create(
		<Form
			destiny="011"
			origin="011"
			setTime="10"
		/>
	);

	it('form rendering works', () => {

		let tree = form.toJSON();
		expect(tree).toMatchSnapshot();
	});

	const results = renderer.create(
		<Results
			plans={plans.data}
			price="2.7"
			time="61"
		/>
	);
	
	it('results rendering works', () => {

		let tree = results.toJSON();
		expect(tree).toMatchSnapshot();
	});

	const modal = renderer.create(
		<Modal
			details={details.data}
			modalState="show"
		/>
	);
	
	it('modal rendering works', () => {
		let tree = modal.toJSON();
		expect(tree).toMatchSnapshot();
	});

});

//testes:

// Carregar JSONs
// Clique dos botões +
// Clique na hora de selecionar o plano
// Clique na hora de fechar o modal
// Plano existente está preenchendo resultado
// Plano inexistente não está preenchendo nada
// Verificar se os input text estão preenchidos