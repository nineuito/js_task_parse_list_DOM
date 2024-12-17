'use strict';

const employeeList = document.querySelector('body ul');

const strSalaryToNumber = (str) => Number(str.substring(1).replace(',', ''));

function sortList(list) {
  const nodes = [...list.children];

  nodes.forEach((el) => el.remove());

  const sorted = nodes.sort((first, second) => {
    return (
      strSalaryToNumber(second.dataset.salary) -
      strSalaryToNumber(first.dataset.salary)
    );
  });

  list.append(...sorted);
}

function getEmployees(list) {
  return [...list.children]
    .filter((el) => el.hasAttribute('data-position'))
    .map((el) => {
      return {
        name: el.textContent.trim(),
        position: el.dataset.position,
        salary: strSalaryToNumber(el.dataset.salary),
        age: +el.dataset.age,
      };
    });
}

sortList(employeeList);
getEmployees(employeeList);
