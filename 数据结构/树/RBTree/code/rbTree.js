var NodeColor = { Black: "black", Red: "red" };

var RBNode = function (_date, _paret, _color) {
  this.Data = _date;
  this.Parent = _paret;
  this.Color = _color;
  this.LeftNode = null;
  this.RightNode = null;
}

var RedBlackBinaryTree = function () {
  this.RootNode = null;//根节点

  this.Insert = function (insertValue) {
    deformStep = [];
    if (this.RootNode == null) {
      this.RootNode = new RBNode(insertValue, null, NodeColor.Black);
    } else {
      var newNode = insert.call(this, insertValue);
      insertFixUp.call(this, newNode);
    }
  }

  function insert(key) {
    var node = this.RootNode;

    var newNode = new RBNode(key, null, NodeColor.Red);
    while (true) {
      if (key > node.Data) {
        if (node.RightNode == null) {
          newNode.Parent = node;
          node.RightNode = newNode;
          break;
        }
        node = node.RightNode;
      } else if (key < node.Data) {
        if (node.LeftNode == null) {
          newNode.Parent = node;
          node.LeftNode = newNode;
          break;
        }
        node = node.LeftNode;
      } else {
        break;
      }
    }
    return newNode;
  }

  function insertFixUp(node) {
    var parentNode = node.Parent;
    if (parentNode != null && NodeColor.Red == parentNode.Color) {
      var gprentNode = parentNode.Parent;
      if (parentNode == gprentNode.LeftNode) {
        var uncleNode = gprentNode.RightNode;
        if (uncleNode != null && NodeColor.Red == uncleNode.Color) {
          parentNode.Color = NodeColor.Black;
          uncleNode.Color = NodeColor.Black;
          gprentNode.Color = NodeColor.Red;
          insertFixUp.call(this, gprentNode);
        } else {
          if (parentNode.RightNode == node) {
            leftRotation.call(this, parentNode);
            insertFixUp.call(this, parentNode);
          } else if (parentNode.LeftNode == node) {
            parentNode.Color = NodeColor.Black;
            gprentNode.Color = NodeColor.Red;
            rightRotation.call(this, gprentNode);
          }
        }
      } else {
        var uncleNode = gprentNode.LeftNode;
        if (uncleNode != null && NodeColor.Red == uncleNode.Color) {
          parentNode.Color = NodeColor.Black;
          uncleNode.Color = NodeColor.Black;
          gprentNode.Color = NodeColor.Red;
          insertFixUp.call(this, gprentNode);
        } else {
          if (parentNode.LeftNode == node) {
            rightRotation.call(this, parentNode);
            insertFixUp.call(this, parentNode);
          } else if (parentNode.RightNode == node) {
            parentNode.Color = NodeColor.Black;
            gprentNode.Color = NodeColor.Red;
            leftRotation.call(this, gprentNode);
          }
        }
      }
    }
    this.RootNode.Color = NodeColor.Black;
  }

  function leftRotation(node) {
    var temp = node.RightNode;

    node.RightNode = temp.LeftNode;
    if (temp.LeftNode != null) {
      temp.LeftNode.Parent = node;
    }

    temp.Parent = node.Parent;

    if (node.Parent == null) {
      this.RootNode = temp;
    }
    else {
      if (node.Parent.LeftNode == node) {
        node.Parent.LeftNode = temp;
      } else {
        node.Parent.RightNode = temp;
      }
    }
    temp.LeftNode = node;
    node.Parent = temp;
  }

  function rightRotation(node) {
    var temp = node.LeftNode;

    node.LeftNode = temp.RightNode;
    if (temp.RightNode != null) {
      temp.RightNode.Parent = node;
    }

    temp.Parent = node.Parent;

    if (node.Parent == null) {
      this.RootNode = temp;
    } else {
      if (node == node.Parent.RightNode) {
        node.Parent.RightNode = temp;
      } else {
        node.Parent.LeftNode = temp;
      }
    }
    temp.RightNode = node;
    node.Parent = temp;
  }

  this.Remove = function (key) {
    var node = search.call(this, this.RootNode, key);
    if (node == null) {
      return;
    } else {
      remove.call(this, node);
    }
  }

  function remove(node) {
    var child, parent, nodeColor;
    if (node.LeftNode != null && node.RightNode != null) {
      var tempNode = findMin(node.RightNode);

      if (node.Parent == null) {
        this.RootNode = tempNode;
      } else {
        if (node.Parent.LeftNode == node) {
          node.Parent.LeftNode = tempNode;
        } else {
          node.Parent.RightNode = tempNode;
        }
      }

      child = tempNode.RightNode;
      parent = tempNode.Parent;
      nodeColor = tempNode.Color;

      if (parent.Data == node.Data) {
        parent = tempNode;
      } else {
        if (child != null) {
          child.Parent = parent;
        }
        parent.LeftNode = child;

        tempNode.RightNode = node.RightNode;
        node.RightNode.Parent = tempNode;
      }

      tempNode.Parent = node.Parent;
      tempNode.Color = node.Color;
      tempNode.LeftNode = node.LeftNode
      node.LeftNode.Parent = tempNode;

      if (nodeColor == NodeColor.Black) {
        removeFixUp.call(this, child, parent);
      }
    } else {

      if (node.LeftNode != null) {
        child = node.LeftNode;
      } else {
        child = node.RightNode;
      }

      parent = node.Parent;
      nodeColor = node.Color;

      if (child != null) {
        child.Parent = parent;
      }

      if (parent != null) {
        if (parent.LeftNode != null && parent.LeftNode.Data == node.Data) {
          parent.LeftNode = child;
        } else {
          parent.RightNode = child;
        }
      } else {
        this.RootNode = child;
      }

      if (nodeColor == NodeColor.Black) {
        removeFixUp.call(this, child, parent)
      }
    }
    node = null;
  }

  function removeFixUp(node, parentNode) {
    var otherNode;
    while ((node == null || node.Color == NodeColor.Black) && (node != this.RootNode)) {
      if (parentNode.LeftNode == node) {
        otherNode = parentNode.RightNode;
        if (otherNode.Color == NodeColor.Red) {
          otherNode.Color = NodeColor.Black;
          parentNode.Color = NodeColor.Red;
          leftRotation.call(this, parentNode);
          otherNode = parentNode.RightNode;
        }

        if ((otherNode.LeftNode == null || otherNode.LeftNode.Color == NodeColor.Black) &&
          (otherNode.RightNode == null || otherNode.RightNode.Color == NodeColor.Black)) {
          otherNode.Color = NodeColor.Red;
          node = parentNode;
          parentNode = node.Parent;
        } else {
          if (otherNode.RightNode == null || otherNode.RightNode.Color == NodeColor.Black) {
            otherNode.LeftNode.Color == NodeColor.Black;
            otherNode.Color = NodeColor.Red;
            rightRotation.call(this, otherNode);
            otherNode = parentNode.RightNode;
          }

          otherNode.Color = parentNode.Color;
          parentNode.Color = NodeColor.Black;
          otherNode.RightNode.Color = NodeColor.Black;
          leftRotation.call(this, parentNode);
          node = this.RootNode;
          break;
        }
      } else {
        otherNode = parentNode.LeftNode;
        if (otherNode.Color == NodeColor.Red) {
          otherNode.Color = NodeColor.Black;
          parentNode.Color = NodeColor.Red;
          rightRotation.call(this, parentNode);
          otherNode = parentNode.LeftNode;
        }

        if ((otherNode.LeftNode == null || otherNode.LeftNode.Color == NodeColor.Black) &&
          (otherNode.RightNode == null || otherNode.RightNode.Color == NodeColor.Black)) {
          otherNode.Color = NodeColor.Red;
          node = parentNode;
          parentNode = node.parent;
        } else {
          if (otherNode.LeftNode == null || otherNode.LeftNode.Color == NodeColor.Black) {
            otherNode.RightNode.Color = NodeColor.Black;
            otherNode.Color = NodeColor.Red;
            leftRotation.call(this, otherNode);
            otherNode = parentNode.LeftNode;
          }

          otherNode.Color = parentNode.Color;
          parentNode.Color = NodeColor.Black;
          otherNode.LeftNode.Color = NodeColor.Black;
          rightRotation.call(this, parentNode);
          node = this.RootNode;
          break;
        }
      }
    }
    if (node != null) {
      node.Color = NodeColor.Black;
    }
  }

  this.Search = function (key) {
    return search.call(this, this.RootNode, Key);
  }

  function search(node, key) {
    if (node == null) {
      return null;
    }

    if (node.Data > key) {
      return search(node.LeftNode, key);
    } else if (node.Data < key) {
      return search(node.RightNode, key);
    } else {
      return node;
    }
  }

  this.FindMin = function () {
    return findMin(this.RootNode);
  }

  function findMin(node) {
    if (node.LeftNode == null) {
      return node;
    }
    return findMin(node.LeftNode);
  }

  this.FindMax = function () {
    return findMax(this.RootNode)
  }

  function findMax(node) {
    if (node.RightNode == null) {
      return node;
    }
    return findMax(node.RightNode);
  }


  this.SearchRange = function (minKey, maxKey) {
    return searchRange(minKey, maxKey, this.RootNode, []);
  }

  function searchRange(minKey, maxKey, node, nodeList) {
    if (node == null) {
      return nodeList;
    }

    if (node.Data > minKey) {
      searchRange(minKey, maxKey, node.LeftNode, nodeList);
    }

    if (node.Data >= minKey && node.Data < maxKey) {
      nodeList.push(node.Data);
    }

    if (node.Data < maxKey) {
      searchRange(minKey, maxKey, node.RightNode, nodeList);
    }

    return nodeList;
  }

  this.LevelOrder = function (action) {
    levelOrder(this.RootNode, action);
  }

  function levelOrder(node, action) {
    var stack = [];
    stack.push(node);

    while (stack.length > 0) {
      var temp = stack.pop();

      action(temp);

      if (temp.LeftNode != null) {
        stack.push(temp.LeftNode);
      }

      if (temp.RightNode != null) {
        stack.push(temp.RightNode);
      }
    }
  }


  this.PreOrder = function (action) {
    treeOrder(this.RootNode, action, null, null);
  }

  this.InOrder = function (action) {
    treeOrder(this.RootNode, null, action, null);
  }

  this.PostOrder = function (action) {
    treeOrder(this.RootNode, null, null, action);
  }

  function treeOrder(node, preOrderAction, inOrderAction, postOrderAction) {
    if (preOrderAction) {
      preOrderAction(node);
    }

    if (node.LeftNode != null) {
      treeOrder(node.LeftNode, preOrderAction, inOrderAction, postOrderAction);
    }

    if (inOrderAction) {
      inOrderAction(node);
    }

    if (node.RightNode != null) {
      treeOrder(node.RightNode, preOrderAction, inOrderAction, postOrderAction);
    }

    if (postOrderAction) {
      postOrderAction(node);
    }
  }
}

var tree = new RedBlackBinaryTree();
