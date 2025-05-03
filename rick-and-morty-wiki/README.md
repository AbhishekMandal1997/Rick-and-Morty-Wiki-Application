# Rick and Morty Character Wiki

A React application that lets you explore characters from the Rick and Morty universe using the [Rick and Morty API](https://rickandmortyapi.com/).

![Rick and Morty Wiki](https://rickandmortyapi.com/api/character/avatar/1.jpeg)

## Features

- Browse all Rick and Morty characters with pagination
- View detailed information about each character
- Random character selector
- Real-time clock display
- Responsive design for all screen sizes

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rick-and-morty-wiki.git
cd rick-and-morty-wiki
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
rick-and-morty-wiki/
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx
│   │   ├── FooterClock.jsx
│   │   └── RandomCharacterButton.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CharacterDetail.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── public/
├── index.html
└── package.json
```

## Technologies Used

- React 19
- React Router DOM 7
- Axios for API calls
- Vite for build tooling

## API Reference

This project uses the [Rick and Morty API](https://rickandmortyapi.com/). The main endpoints used are:

- `GET /api/character` - Get all characters (paginated)
- `GET /api/character/{id}` - Get a specific character

## Features in Detail

### Character List
- Displays a grid of character cards
- Each card shows:
  - Character image
  - Name
  - Species
  - Status
  - Link to detailed view

### Random Character
- Click the "Random Character" button to be taken to a random character's detail page
- Uses the total character count from the API to generate a random valid ID

### Footer Clock
- Displays current time and date
- Updates in real-time
- Shows in user's local timezone

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the data
- React team for the amazing framework
- Vite team for the build tool
