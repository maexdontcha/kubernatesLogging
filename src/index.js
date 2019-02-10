#!/usr/bin/env node

var amqp = require('amqplib/callback_api')

amqp.connect('amqp://localhost:30003', function(err, conn) {
  if (err) console.log(err)
  conn.createChannel(function(err, ch) {
    var q = 'logging_queue'
    var msg = { durable: 'world', xxxx: 'wasup' }

    ch.assertQueue(q, { durable: true })
    setInterval(() => {
      ch.sendToQueue(q, Buffer.from(JSON.stringify(msg)))
    }, 10)
  })
  //   setTimeout(function() {
  //     conn.close()
  //     process.exit(0)
  //   }, 500)
})

// const kafka = require('kafka-node')

// const client = new kafka.KafkaClient()
// const producer = new kafka.Producer(client)
// const payloads = [
//   { topic: 'topic1', messages: 'hi', partition: 0 },
//   { topic: 'topic1', messages: ['hello', 'world', 0] }
// ]

// client.on('ready', function() {
//   console.log('client ready')
// })

// client.on('error', function(err) {
//   console.log('client error: ' + err)
// })

// producer.on('ready', function() {
//   producer.send(payloads, function(err, data) {
//     console.log(data)
//   })
// })

// producer.on('error', function(err) {
//   console.log(err)
// })+

// const URL = 'localhost:9092'

// var kafka = require('kafka-node'),
//   Producer = kafka.Producer,
//   client = new kafka.KafkaClient({
//     kafkaHost: URL
//   })
// ;(producer = new Producer(client)),
//   (payloads = [
//     {
//       topic: 'test topic',
//       messages: ['test message']
//     }
//   ])

// client.on('ready', function() {
//   console.log('client ready')
// })

// client.on('error', function(err) {
//   console.log('client error: ' + err)
// })

// producer.on('ready', function() {
//   producer.send(payloads, function(err, data) {
//     console.log('send: ' + data)
//     process.exit()
//   })
// })

// producer.on('error', function(err) {
//   console.log('error: ' + err)
//   process.exit()
// })
