import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

it("Renders home by showing h1 tag", () => {
  render(<HomePage />)
  const heading = screen.getByRole('heading', { level: 1});
  expect(heading).toBeTruthy();
});

it("Has correct h1 text", () => {
  render(<HomePage />)
  expect(screen.getByRole('heading', { level: 1})).toHaveTextContent('Gabriel Maestre')
})

it("Has the main image", () => {
  render(<HomePage />)
  const mainImage = screen.getByAltText('User Main Image')
  expect(mainImage).toBeInTheDocument();
});

it("Has the about section", () => {
  render(<HomePage />)
  const aboutHeading = screen.getByText('Sobre mí')
  expect(aboutHeading).toBeInTheDocument();
});

it("Has the interests section", () => {
  render(<HomePage />)
  const interestsHeading = screen.getByText('Mis intereses')
  const interestsUl = screen.getByRole('list')

  expect(interestsHeading).toBeInTheDocument();
  expect(interestsUl).toBeInTheDocument();
});

it("Has the contact form and its inputs", () => {
  render(<HomePage />)
  const nameInput = screen.getByPlaceholderText('Escribe tu nombre')
  const emailInput = screen.getByPlaceholderText('Escribe tu email')
  const messageInput = screen.getByPlaceholderText('Escribe tu mensaje')

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
});

