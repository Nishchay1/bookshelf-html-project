let books = [];

let sampleBooks = ["To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros", "To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Brave New World by Aldous Huxley", "The Great Gatsby by F. Scott Fitzgerald", "Pride and Prejudice by Jane Austen", "Jane Eyre by Charlotte Bronte", "Wuthering Heights by Emily Bronte", "The Catcher in the Rye by J.D. Salinger", "Fahrenheit 451 by Ray Bradbury", "The Old Man and the Sea by Ernest Hemingway", "Animal Farm by George Orwell", "One Hundred Years of Solitude by Gabriel Garcia Marquez", "The Alchemist by Paulo Coelho", "Life of Pi by Yann Martel", "The Kite Runner by Khaled Hosseini", "A Man Called Ove by Fredrik Backman", "The Unbearable Lightness of Being by Milan Kundera", "The Road by Cormac McCarthy", "A Walk in the Woods by Bill Bryson", "A Thousand Splendid Suns by Khaled Hosseini", "The Book Thief by Markus Zusak", "The Help by Kathryn Stockett", "The Nightingale by Kristin Hannah", "All the Light We Cannot See by Anthony Doerr", "The Rosie Project by Graeme Simsion", "The Immortals of Threadneedle Street by Roger Horwood", "The Storied Life of A.J. Fikry by Gabrielle Zevin", "The Art of Hearing Heartbeats by Jan-Philipp Sendker", "The Shadow of the Wind by Carlos Ruiz Zafon", "The Red Tent by Anita Diamant", "The Poisonwood Bible by Barbara Kingsolver", "The Secret History by Donna Tartt", "The Age of Innocence by Edith Wharton", "The Bell Jar by Sylvia Plath", "The Stranger by Albert Camus", "The House of Mirth by Edith Wharton", "The Picture of Dorian Gray by Oscar Wilde", "The Adventures of Huckleberry Finn by Mark Twain", "The Sound and the Fury by William Faulkner", "The Color Purple by Alice Walker", "The Bellman of Seville by Bizet (novelization)", "The Sense of an Ending by Julian Barnes", "The Fault in Our Stars by John Green", "The Giver by Lois Lowry", "The Grapes of Wrath by John Steinbeck", "The Underground Railroad by Colson Whitehead", "The Hitchhiker's Guide to the Galaxy by Douglas Adams", "The Curious Incident of the Dog in the Night-Time by Mark Haddon", "The Brief Wondrous Life of Oscar Wao by Junot Diaz", "The House on Mango Street by Sandra Cisneros"];

let shelfPercentage = 0;

let currentShelfSlot = 0;

const bookTitleInput = document.querySelector(".title-textbox");
const addBookButton = document.querySelector(".add-book-btn");
const bookText = document.querySelector(".book-text");
const bookHoverText = document.querySelector(".book-hover-text");
const shelfSlots = document.querySelectorAll(".books"); //array of books elements
const saveButton = document.getElementById('save-btn');

const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');

const sampleButton = document.querySelector(".sample-btn");

function randomColor(){
    let r = (Math.random() * 255);
	let g = (Math.random() * 255);
	let b = (Math.random() * 255);
    return "rgb("+r+", "+g+", "+b+")"; //random value for color
}

function randomBookWidth(){
    return (Math.random() * 0.003*100) + 0.01*100; //random number from 1% to 2% of shelf width
}

function randomBookHeight(){
	return 100-((Math.random() * 0.15*100) + 0.01*100); //random number from 95% to 99% of shelf height
}

function addBook(title, index){
	console.log(index);
	if (title && title.value !== ""){
		let randWidth = randomBookWidth(); //store random width in a variable so it can be used to check if the current shelf has enough space to where the books won't shrink
		if (!willShelfBeFull(randWidth)){
			shelfPercentage+=randWidth;
			let book = '<div class="book" id="'+'book'+index+'"></div>'; //book div where the id is used to help set the css and other attributes in this script
			shelfSlots[currentShelfSlot].innerHTML += book; //add book to the current shelf that still has space in it.
			let x = document.getElementById("book"+index); //select book based on id for styling
			x.style.backgroundColor=randomColor(); //set a random color for book
			x.style.width=randWidth+"%"; //set random width
			x.style.height=randomBookHeight()+"%"; //set random height
			x.setAttribute("onclick", 'bookTitle("'+title+'")'); //assign the bookTitle method for when book is clicked
			x.setAttribute("onmouseover", 'bookHover("'+title+'")');
			console.log(title);
		}
		else if (willShelfBeFull(randWidth) && currentShelfSlot<shelfSlots.length-1) { //if adding a book would be more width than the shelf percentage and there is another shelf available.
			currentShelfSlot+=1; //move to the next shelf
			shelfPercentage=0; //reset current shelf percent tracker
		}
		else{
			bookText.innerHTML = "Bookshelf is full.";
		}
	}
	else{
		bookText.innerText = "Empty book title.";
	}
}


function willShelfBeFull(amount){
	return shelfPercentage+amount>=95;
}

function bookTitle(id){
	bookText.innerText = id;
}

function bookHover(id){
	bookHoverText.innerText = id;
}

function saveBookList(){
	let fileName = 'book-list.txt';
	let blob = new Blob([books.map(element => element + '\n').join('')], { type: 'text/plain' });
	let url = URL.createObjectURL(blob);
	let link = document.createElement('a');
	link.href = url;
	link.download = fileName;
	link.click();
}

function resetShelves(){
	shelfSlots.forEach(shelf => {shelf.innerHTML = ""});
	shelfPercentage = 0;
	currentShelfSlot = 0;
}

function updateShelves() {
	resetShelves();
	for (let i=0;i<books.length;i++){
		addBook(books[i], i);
	}
}

function readTextFile(file) {
	const reader = new FileReader();
	reader.onload = function(event) {
		let arr = event.target.result.split('\n');
		arr.forEach(title => {appendToBooks(title);});
		updateShelves();
	};
	reader.onerror = function(event) {
		console.log('Error: ', event.target.error);
	};
	reader.readAsText(file);
}

function appendToBooks(item){
	if (item && item.value !== ""){
		books.push(item);
	}
}

addBookButton.addEventListener("click", function(){
	books.push(bookTitleInput.value); //add book title to books array
	addBook(bookTitleInput.value, (books.length-1)); //add book to shelf
	bookTitleInput.value="";
});

saveButton.addEventListener('click', saveBookList);

uploadButton.addEventListener('click', function() {
	if (fileInput.value) {
		readTextFile(fileInput.files[0]);
		fileInput.value = "";
		books = [];
	}
	else{
		bookText.innerText = "Invalid file.";
	}
});

sampleButton.addEventListener('click', function() {
	books = [];
	sampleBooks.forEach(book => {appendToBooks(book);})
	updateShelves();
});