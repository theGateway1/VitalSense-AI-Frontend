# VitalSense-AI

This project is a health data management and AI-assisted analysis platform. It combines personal health record management with advanced AI capabilities for data analysis and medical information retrieval.

![vitalSense](https://github.com/user-attachments/assets/2aeff7d6-cad6-4e6a-a860-6404f8f7f4d4)

![vitalSense](https://github.com/user-attachments/assets/29a764a7-553d-4073-99ec-7ea00327dfde)

## Features

### Real time sensor data integration

- Integration of Arduino sensors for real-time data collection
- Display of sensor data on the dashboard using ESP8266 syncing data to Supabase

### Health Records Management

- Secure upload and storage of personal health records
- File preview and download functionality
- Rename and delete options for uploaded files
- Organized display of health records with a user-friendly interface
- Automatic transcription of uploaded medical records (PDF and images)
- Creation of embeddings from transcribed text using Cohere
- Storage of embeddings in Supabase's vector database for efficient retrieval

### AI-Powered Chat Interface

- Conversational AI interface for querying personal health data
- Support for multiple language models (LLMs) including OpenAI's GPT models
- Conversation history management with options to create, rename, and delete conversations

### RAG (Retrieval-Augmented Generation) Pipeline

- Utilizes Langchain for efficient document processing and retrieval
- Implements Cohere embeddings for semantic understanding of health data
- Enhances AI responses with relevant information from personal health records
- Improves accuracy and relevance of AI-generated answers

### Perplexity-like Medical Web Search

- Integrated medical search functionality powered by the Tavily API
- Provides up-to-date medical information from reputable online sources
- Displays search results with source attribution and relevance ranking
- Generates comprehensive reports based on search results using OpenAI's GPT-4o

## Tech Stack

- Frontend: Next.js with TypeScript
- Backend: FastAPI (Python)
- Database: Supabase (PostgreSQL with pgvector extension)
- AI/ML: Langchain, OpenAI GPT models, Cohere embeddings
- External APIs: Tavily for medical web search


## Usage

1. Upload health records through the Health Records interface
2. Use the Chat interface to query your health data or ask medical questions
3. Utilize the Medical Search feature for up-to-date medical information

## Medical Records Processing

When a medical record is uploaded:

1. The file is sent to the backend for processing.
2. If it's a PDF, it's converted to text using PyPDF2. If it's an image, OCR is performed using Tesseract.
3. The extracted text is then sent to Cohere to generate embeddings.
4. The embeddings, along with the original text and metadata, are stored in the Supabase vector database.

This process allows for efficient semantic search and retrieval of relevant information during chat interactions.
