import sys
import tensorflow as tf
import openpyxl
import shutil
from pathlib import Path



def classifyFromPathList(filePathList):

    # Unpersists graph from file
    with tf.gfile.FastGFile("./output.pb", 'rb') as f:
        graph_def = tf.GraphDef()
        graph_def.ParseFromString(f.read())
        _ = tf.import_graph_def(graph_def, name='')

    with tf.Session() as sess:
        # Feed the image_data as input to the graph and get first prediction
        softmax_tensor = sess.graph.get_tensor_by_name('final_result:0')




        # Loads label file, strips off carriage return
        label_lines = [line.rstrip() for line
                           in tf.gfile.GFile("./labels.txt")]

        resultList = []
        for filePath in filePathList:
            # Read in the image_data
            image_data = tf.gfile.FastGFile(filePath, 'rb').read()

            predictions = sess.run(softmax_tensor, \
                     {'DecodeJpeg/contents:0': image_data})

            # Sort to show labels of first prediction in order of confidence
            top_k = predictions[0].argsort()[-len(predictions[0]):][::-1]

            result = {}
            filename = filePath.split('/')[-1]
            result['filename'] = filename
            isMax = True
            for node_id in top_k:

                human_string = label_lines[node_id]
                score = predictions[0][node_id]

                if isMax:
                    result["prediction"] = human_string
                    isMax = False

                result[human_string] = score

            resultList.append(result)


    return resultList


if __name__ == '__main__':
    test = [r"./testPhotos/empty.jpg",r"./testPhotos/full.jpg",r"./testPhotos/half.jpg"]
    result = classifyFromPathList(test)

    print(result)
